import React from 'react';

import s from '../ShoppingCart.module.scss';

export const ShoppingCartHeader = () => (
  <div className={s.shoppingCart__header}>
    <div className={s.shoppingCart__innerHeader}>
      <img src="/images/icons/shopping-cart_black.svg" alt="shop-cart" />
      <h3 className={s.shoppingCart__titleHeader}>Корзина</h3>
    </div>
    <div className={s.shoppingCart__buttonHeader}>
      <img src="/images/icons/delete-icon.svg" alt="delete" />
      Очистить корзину
    </div>
  </div>
);
