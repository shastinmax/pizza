import React from 'react';

import { NavLink } from 'react-router-dom';

import { PathNavigation } from '../../../enums/navigation';
import s from '../ShoppingCart.module.scss';

export const ShoppingCartHeader = () => (
  <div className={s.shoppingCart__header}>
    <div className={s.shoppingCart__innerHeader}>
      <img src="/images/icons/shopping-cart_black.svg" alt="shop-cart" />
      <h3 className={s.shoppingCart__titleHeader}>Корзина</h3>
    </div>

    <NavLink
      className={s.shoppingCart__buttonHeader}
      to={PathNavigation.EMPTY_SHOPPING_CART}
    >
      <img src="/images/icons/delete-icon.svg" alt="delete" />
      Очистить корзину
    </NavLink>
  </div>
);
