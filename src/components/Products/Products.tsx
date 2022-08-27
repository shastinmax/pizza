import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { axiosConfig } from '../../api/config';
import { useAppSelector } from '../../hooks/useAppSelectors';
import {
  selectCategoryIndex,
  selectPageCount,
  selectSortCategory,
} from '../../store/filter/selectors';
import { ProductItem } from '../ProductItem/ProductItem';
import { Sceleton } from '../Sceleton/Sceleton';

import { ButtonsCategory } from './Buttons/ButtonsCategory';
import s from './Products.module.scss';
import { Sort } from './Sort/Sort';
import { SearchPropsType } from './types';

export const Products = (props: SearchPropsType) => {
  const itemCategoryIndex = useAppSelector(selectCategoryIndex);
  const itemCategorySort = useAppSelector(selectSortCategory);
  const currentPage = useAppSelector(selectPageCount);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchValue } = props;

  const fetchPizzaz = () => {
    setIsLoading(true);
    const order = itemCategorySort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = itemCategorySort.sortProperty.replace('-', '');
    const categoryID = itemCategoryIndex > 0 ? `category=${itemCategoryIndex}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `${axiosConfig.baseURL}?page=${currentPage}&limit=4&${search}${categoryID}&sortBy=${sortBy}&order=${order}`,
      )
      .then(res => {
        setItems(res.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchPizzaz();
  }, [itemCategoryIndex, itemCategorySort, searchValue, currentPage]);

  const pizzas = items.map(({ id, name, imageUrl, sizes, price, types }) => (
    <ProductItem
      key={id}
      name={name}
      imageUrl={imageUrl}
      sizes={sizes}
      price={price}
      types={types}
      id={id}
    />
  ));
  // eslint-disable-next-line react/no-array-index-key
  const skeletons = [...new Array(10)].map((_, index) => <Sceleton key={index} />);
  return (
    <>
      <div className={s.products__header}>
        <ButtonsCategory />
        <Sort />
      </div>
      <h1 className={s.products__title}>Все пиццы</h1>
      <div className={s.products__productItems}>
        {isLoading
          ? // eslint-disable-next-line react/no-array-index-key
            skeletons
          : pizzas}
      </div>
    </>
  );
};
