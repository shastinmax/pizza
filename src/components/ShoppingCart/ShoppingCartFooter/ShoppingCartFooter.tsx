import React from 'react';

import s from '../ShoppingCart.module.scss';

export const ShoppingCartFooter = () => (
  <div className={s.shoppingCart__footer}>
    <button className={`btn ${s.shoppingCart__btnBack}`} type="button">
      <img src="/images/icons/arrow.svg" alt="arrow" /> Вернуться назад
    </button>
    <button type="button" className={`btn ${s.shoppingCart__btnPay}`}>
      Оплатить сейчас
    </button>
  </div>
);
