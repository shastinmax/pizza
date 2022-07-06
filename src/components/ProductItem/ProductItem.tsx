import React, { useState } from 'react';

import s from './ProductItem.module.scss';
import { ProductItemPropsType } from './types';

const FIRST_INDEX = 0;

export const ProductItem = (props: ProductItemPropsType) => {
  const { name, imageUrl, sizes, price, types } = props;
  const categoriesPizzas = ['тонкое', 'традиционное'];

  const [count, setCount] = useState<number>(FIRST_INDEX);
  const [sizeActive, setSizeActive] = useState<null | number>(null);
  const [categoryActive, setCategoryActive] = useState<null | number>(null);

  const addProductItem = () => {
    setCount(count + 1);
  };
  const onSizeActiveClick = (i: number) => {
    setSizeActive(i);
  };
  const onCategoryActiveClick = (i: number) => {
    setCategoryActive(i);
  };

  return (
    <div className={s.productItem__wrapper}>
      <img className={s.productItem__pizza} src={imageUrl} alt="pizza" />
      <h2 className={s.productItem__title}>{name}</h2>

      <div className={s.productItem__sort}>
        <ul className={s.productItem__sort_listTitle}>
          {types.map((type, i) => (
            <li
              role="presentation"
              key={type}
              onClick={() => onCategoryActiveClick(i)}
              className={categoryActive === i ? s.productItem__sort_active : ''}
            >
              {categoriesPizzas[type]}
            </li>
          ))}
        </ul>
        <ul className={s.productItem__sort_listPrice}>
          {sizes.map((size, i) => (
            <li
              role="presentation"
              key={size}
              onClick={() => onSizeActiveClick(i)}
              className={sizeActive === i ? s.productItem__sort_active : ''}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>

      <div className={s.productItem__footer}>
        <span className={s.productItem__footer_text}>
          от {price} <img src="/images/icons/ruble-black.svg" alt="ruble" />
        </span>

        <button
          onClick={addProductItem}
          type="button"
          className={`btn ${s.productItem__footer_btn}`}
        >
          <img src="/images/icons/plus.svg" alt="plus" /> Добавить
          <span>{count}</span>
        </button>
      </div>
    </div>
  );
};
