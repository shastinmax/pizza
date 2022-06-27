import React from 'react';

import { ProductItem } from '../ProductItem/ProductItem';

import { Buttons } from './Buttons/Buttons';
import s from './Products.module.scss';
import { Sort } from './Sort/Sort';

export const Products = () => (
  <>
    <div className={s.products__header}>
      <Buttons />
      <Sort />
    </div>
    <h1 className={s.products__title}>Все пиццы</h1>
    <div className={s.products__productItems}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </>
);
