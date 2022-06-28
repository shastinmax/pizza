import React from 'react';

import s from './ShoppingCart.module.scss';
import { ShoppingCartItem } from './ShoppingCartItem/ShoppingCartItem';

export const ShoppingCart = () => (
  <div className={s.container}>
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
    <div className={s.shoppingCart__shoppingCartItem}>
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
    </div>
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
    <div className={s.shoppingCart__footer}>
      <button className={`btn ${s.shoppingCart__btnBack}`} type="button">
        <img src="/images/icons/arrow.svg" alt="arrow" /> Вернуться назад
      </button>
      <button type="button" className={`btn ${s.shoppingCart__btnPay}`}>
        Оплатить сейчас
      </button>
    </div>
  </div>
);
