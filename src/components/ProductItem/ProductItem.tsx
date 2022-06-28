import React from 'react';

import s from './ProductItem.module.scss';

export const ProductItem = () => (
  <div className={s.productItem__wrapper}>
    <img src="/images/pizza.jpg" alt="pizza" />
    <h2 className={s.productItem__title}>Чизбургер-пицца</h2>

    <div className={s.productItem__sort}>
      <ul className={s.productItem__sort_listTitle}>
        <li className={s.productItem__sort_active}>тонкое</li>
        <li>традиционное</li>
      </ul>
      <ul className={s.productItem__sort_listPrice}>
        <li className={s.productItem__sort_active}>26 см</li>
        <li>30 см</li>
        <li>40 см</li>
      </ul>
    </div>

    <div className={s.productItem__footer}>
      <span className={s.productItem__footer_text}>
        от 395 <img src="/images/icons/ruble-black.svg" alt="ruble" />
      </span>
      <button type="button" className={`btn ${s.productItem__footer_btn}`}>
        <img src="/images/icons/plus.svg" alt="plus" /> Добавить
        <span>2</span>
      </button>
    </div>
  </div>
);
