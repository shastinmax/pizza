import React from 'react';

import { ProductItem } from '../ProductItem/ProductItem';

import { ButtonsCategory } from './Buttons/ButtonsCategory';
import { pizzass } from './constants';
import s from './Products.module.scss';
import { Sort } from './Sort/Sort';

export const Products = () => (
  <>
    <div className={s.products__header}>
      <ButtonsCategory />
      <Sort />
    </div>
    <h1 className={s.products__title}>Все пиццы</h1>
    <div className={s.products__productItems}>
      {pizzass.pizzas.map(({ id, name, imageUrl, sizes, price, types }) => (
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
