import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { axiosConfig } from '../../api/config';
import { useAppSelector } from '../../hooks/useAppSelectors';
import { selectPizzas } from '../../store/cart/selectors';
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

import { setItems } from 'store/pizzas/slice';

const FIRST_INDEX = 0;
const SKELETONS_ARRAY_LENGTH = 4;

export const Products = (props: SearchPropsType) => {
  const itemCategoryIndex = useAppSelector(selectCategoryIndex);
  const itemCategorySort = useAppSelector(selectSortCategory);
  const currentPage = useAppSelector(selectPageCount);
  const pizza = useAppSelector(selectPizzas);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { searchValue } = props;

  const fetchPizzas = async () => {
    setIsLoading(true);

    const order = itemCategorySort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = itemCategorySort.sortProperty.replace('-', '');
    const categoryID =
      itemCategoryIndex > FIRST_INDEX ? `category=${itemCategoryIndex}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    try {
      const { data } = await axios.get(
        `${axiosConfig.baseURL}?page=${currentPage}&limit=4&${search}${categoryID}&sortBy=${sortBy}&order=${order}`,
      );

      // setItems(res.data);
      dispatch(setItems(data));
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Ошибка при получении пицц!!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, [itemCategoryIndex, itemCategorySort, searchValue, currentPage]);

  // @ts-ignore
  const pizzas = pizza.map(({ id, name, imageUrl, sizes, price, types }) => (
    // const pizzas = pizza.map((item: { id: React.Key | null | undefined; }) => (
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
  const skeletons = [...new Array(SKELETONS_ARRAY_LENGTH)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Sceleton key={index} />
  ));
  return (
    <>
      <div className={s.products__header}>
        <ButtonsCategory />
        <Sort />
      </div>
      <h1 className={s.products__title}>Все пиццы</h1>
      <div className={s.products__productItems}>{isLoading ? skeletons : pizzas}</div>
    </>
  );
};
