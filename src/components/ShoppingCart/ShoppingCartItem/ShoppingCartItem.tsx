import React from 'react';

import { ShoppingCartPropsType } from '../types';

import s from './ShoppingCartItem.module.scss';

export const ShoppingCartItem = (props: ShoppingCartPropsType) => {
  const { item } = props;
  const { price, imageUrl, name, type, size } = item;
  return (
    <div className={s.shoppingCartItem__wrapper}>
      <div className={s.shoppingCartItem__menu}>
        <img src={imageUrl} alt="pizza" />
        <div className={s.shoppingCartItem__menuTitle}>
          <p>{name} </p>
          <span>
            {type} тесто, {size} см
          </span>
        </div>
      </div>

      <div className={s.shoppingCartItem__increment}>
        <img src="/images/icons/shCart-minus.svg" alt="minus" />
        <span>2</span>
        <img src="/images/icons/shCart-plus.svg" alt="plus" />
      </div>

      <div className={s.shoppingCartItem__price}>
        {price} <img src="/images/icons/ruble-black.svg" alt="ruble" />
      </div>

      <button type="button">
        <img
          className={s.shoppingCartItem__delete}
          src="/images/icons/shCart-delete.svg"
          alt="delete"
        />
      </button>
    </div>
  );
};
