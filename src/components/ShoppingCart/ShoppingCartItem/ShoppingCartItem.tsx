import React from 'react';

import s from './ShoppingCartItem.module.scss';

export const ShoppingCartItem = () => (
  <div className={s.shoppingCartItem__wrapper}>
    <div className={s.shoppingCartItem__menu}>
      <img src="/images/pizza.jpg" alt="pizza" />
      <div className={s.shoppingCartItem__menuTitle}>
        Сырный ципленок <br />
        <span>тонкое тесто, 26 см</span>
      </div>
    </div>
    <div className={s.shoppingCartItem__increment}>
      <img src="/images/icons/shCart-minus.svg" alt="minus" />
      <span>2</span>
      <img src="/images/icons/shCart-plus.svg" alt="plus" />
    </div>
    <div className={s.shoppingCartItem__price}>
      770 <img src="/images/icons/ruble-black.svg" alt="ruble" />
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
