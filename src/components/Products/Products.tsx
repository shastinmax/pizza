import React, { useEffect, useState } from 'react';

import { ProductItem } from '../ProductItem/ProductItem';
import { Sceleton } from '../Sceleton/Sceleton';

import { ButtonsCategory } from './Buttons/ButtonsCategory';
import s from './Products.module.scss';
import { Sort } from './Sort/Sort';
import { SortType } from './Sort/types';

export const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'property',
  });
  const [category, setCategory] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const categoryID = category > 0 ? `category=${category}` : '';

    fetch(
      `https://62c71dc574e1381c0a71bed0.mockapi.io/items?${categoryID}&sortBy=${sortBy}&order=${order}`,
    )
      .then(res => res.json())
      .then(res => {
        setItems(res);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [category, sortType]);
  console.log(sortType, category);
  const onClickCategory = (i: number) => {
    setCategory(i);
  };

  const onClickSortCategory = (sortTypeName: SortType) => {
    // @ts-ignore
    setSortType(sortTypeName);
  };

  return (
    <>
      <div className={s.products__header}>
        <ButtonsCategory category={category} onClickCategory={onClickCategory} />
        <Sort sortType={sortType} onClickSortCategory={onClickSortCategory} />
      </div>
      <h1 className={s.products__title}>Все пиццы</h1>
      <div className={s.products__productItems}>
        {isLoading
          ? // eslint-disable-next-line react/no-array-index-key
            [...new Array(10)].map((_, index) => <Sceleton key={index} />)
          : items.map(({ id, name, imageUrl, sizes, price, types }) => (
              <ProductItem
                key={id}
                name={name}
                imageUrl={imageUrl}
                sizes={sizes}
                price={price}
                types={types}
              />
            ))}
      </div>
    </>
  );
};
