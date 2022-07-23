import React, { useEffect, useState } from 'react';

import { ProductItem } from '../ProductItem/ProductItem';
import { Sceleton } from '../Sceleton/Sceleton';

import { ButtonsCategory } from './Buttons/ButtonsCategory';
import s from './Products.module.scss';
import { Sort } from './Sort/Sort';

export const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62c71dc574e1381c0a71bed0.mockapi.io/items')
      .then(res => res.json())
      .then(res => {
        setItems(res);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={s.products__header}>
        <ButtonsCategory />
        <Sort />
      </div>
      <h1 className={s.products__title}>Все пиццы</h1>
      <div className={s.products__productItems}>
        {/* {pizzass.pizzas.map(({ id, name, imageUrl, sizes, price, types }) => */}
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
