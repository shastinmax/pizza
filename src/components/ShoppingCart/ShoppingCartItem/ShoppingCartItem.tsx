import React from 'react';

import { useDispatch } from 'react-redux';

import { addItems, decCount, removeItems } from '../../../store/cart/slice';
import { ShoppingCartPropsType } from '../types';

import s from './ShoppingCartItem.module.scss';

export const ShoppingCartItem = (props: ShoppingCartPropsType) => {
  const dispatch = useDispatch();

  const { item } = props;
  const { id, price, imageUrl, name, type, size, count } = item;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onIncCountClick = () => {
    dispatch(addItems({ id, price, imageUrl, name, type, size, count }));
  };
  const onDecCountClick = () => {
    dispatch(decCount(id));
  };

  const onDeleteCartItemClick = () => {
    // eslint-disable-next-line no-alert,no-restricted-globals
    const isDone = confirm('Вы точно хотите удалить пиццу?');
    if (isDone) {
      dispatch(removeItems(id));
    }
  };

  return (
    <div className={s.shoppingCartItem__wrapper}>
      <div className={s.shoppingCartItem__menu}>
        <img src={imageUrl} alt="pizza" />
        <div className={s.shoppingCartItem__menuTitle}>
          <p>{name}</p>
          <span>
            {type} тесто, {size} см
          </span>
        </div>
      </div>

      <div className={s.shoppingCartItem__increment}>
        <button onClick={onDecCountClick} type="button">
          <img src="/images/icons/shCart-minus.svg" alt="minus" />
        </button>
        <span>{count}</span>
        <button onClick={onIncCountClick} type="button">
          <img src="/images/icons/shCart-plus.svg" alt="plus" />
        </button>
      </div>

      <div className={s.shoppingCartItem__price}>
        {price} <img src="/images/icons/ruble-black.svg" alt="ruble" />
      </div>

      <button type="button">
        <img
          role="presentation"
          onClick={onDeleteCartItemClick}
          className={s.shoppingCartItem__delete}
          src="/images/icons/shCart-delete.svg"
          alt="delete"
        />
      </button>
    </div>
  );
};
