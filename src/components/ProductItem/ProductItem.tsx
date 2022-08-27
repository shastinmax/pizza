import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import s from './ProductItem.module.scss';
import { ProductItemPropsType } from './types';

import { addItems, addTotalPrice } from 'store/cart/slice';

const FIRST_INDEX = 0;

export const ProductItem = (props: ProductItemPropsType) => {
  const dispatch = useDispatch();

  const { name, imageUrl, sizes, price, types, id } = props;
  const categoriesPizzas = ['тонкое', 'традиционное'];

  const [count, setCount] = useState<number>(FIRST_INDEX);
  const [sizeActive, setSizeActive] = useState<number>(0);
  const [categoryActive, setCategoryActive] = useState<number>(0);

  const addProductItem = () => {
    const item = {
      id,
      price,
      imageUrl,
      name,
      type: categoriesPizzas[categoryActive],
      size: sizes[sizeActive],
    };
    setCount(count + 1);
    dispatch(addItems(item));
    dispatch(addTotalPrice(item.price));
  };
  const onSizeActiveClick = (i: number) => {
    setSizeActive(i);
  };
  const onCategoryActiveClick = (i: number) => {
    setCategoryActive(i);
  };

  return (
    <div className={s.productItem}>
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
    </div>
  );
};
