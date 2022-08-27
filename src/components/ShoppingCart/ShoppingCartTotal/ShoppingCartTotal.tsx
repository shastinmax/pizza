import React from 'react';

import { useAppSelector } from '../../../hooks/useAppSelectors';
import { selectTotalPrice } from '../../../store/cart/selectors';
import s from '../ShoppingCart.module.scss';

export const ShoppingCartTotal = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  return (
    <div className={s.shoppingCart__total}>
      <p className={s.shoppingCart__totalAll}>
        Всего пицц: <span>3 шт</span>
      </p>
      <p className={s.shoppingCart__totalPrice}>
        Сумма заказа:{' '}
        <span>
          {totalPrice}
          <img src="/images/icons/ruble-orange.svg" alt="ruble" />
        </span>
      </p>
    </div>
  );
};
