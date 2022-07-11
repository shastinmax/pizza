import React, { useState } from 'react';

import { ProductItem } from '../ProductItem/ProductItem';
import { Sceleton } from '../Sceleton/Sceleton';

import { ButtonsCategory } from './Buttons/ButtonsCategory';
import { pizzass } from './constants';
import s from './Products.module.scss';
import { Sort } from './Sort/Sort';

export const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className={s.products__header}>
        <ButtonsCategory />
        <Sort />
      </div>
      <h1 className={s.products__title}>Все пиццы</h1>
      <div className={s.products__productItems}>
        {pizzass.pizzas.map(({ id, name, imageUrl, sizes, price, types }) =>
          isLoading ? (
            <Sceleton />
          ) : (
            <ProductItem
              key={id}
              name={name}
              imageUrl={imageUrl}
              sizes={sizes}
              price={price}
              types={types}
            />
          ),
        )}
      </div>
    </>
  );
};
