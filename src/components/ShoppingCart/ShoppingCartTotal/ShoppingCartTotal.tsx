import React from 'react';

import { useAppSelector } from '../../../hooks/useAppSelectors';
import { selectItems, selectTotalPrice } from '../../../store/cart/selectors';
import s from '../ShoppingCart.module.scss';

const FIRST_COUNT = 0;

export const ShoppingCartTotal = () => {
  const items = useAppSelector(selectItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalCount = items.reduce(
    (sum: number, item: { count: number }) => sum + item.count,
    FIRST_COUNT,
  );

  return (
    <div className={s.shoppingCart__total}>
      <p className={s.shoppingCart__totalAll}>
        Всего пицц: <span>{totalCount} шт</span>
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
