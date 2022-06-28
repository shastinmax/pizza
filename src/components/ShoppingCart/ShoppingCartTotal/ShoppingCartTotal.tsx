import React from 'react';

import s from '../ShoppingCart.module.scss';

export const ShoppingCartTotal = () => (
  <div className={s.shoppingCart__total}>
    <p className={s.shoppingCart__totalAll}>
      Всего пицц: <span>3 шт</span>
    </p>
    <p className={s.shoppingCart__totalPrice}>
      Сумма заказа:{' '}
      <span>
        900
        <img src="/images/icons/ruble-orange.svg" alt="ruble" />
      </span>
    </p>
  </div>
);
