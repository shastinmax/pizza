import React from 'react';

import { NavLink } from 'react-router-dom';

import { PathNavigation } from '../../../enums/navigation';
import { useAppSelector } from '../../../hooks/useAppSelectors';
import { selectItems, selectTotalPrice } from '../../../store/cart/selectors';

import s from './BtnCart.module.scss';

const FIRST_COUNT = 0;

export const BtnCart = () => {
  const items = useAppSelector(selectItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalCount = items.reduce(
    (sum: number, item: { count: number }) => sum + item.count,
    FIRST_COUNT,
  );

  const cart = items.length
    ? PathNavigation.SHOPPING_CART
    : PathNavigation.EMPTY_SHOPPING_CART;

  return (
    <div>
      <NavLink className={`btn ${s.btnCart__linkCart}`} to={cart}>
        <span className={s.btnCart__wrapperSpan}>
          <span>{totalPrice}</span>
          <img
            className={s.btnCart__linkCart_ruble}
            src="/images/icons/ruble.svg"
            alt="ruble"
          />
        </span>
        <span className={s.btnCart__linkCart_br} />
        <span className={s.btnCart__wrapperSpan}>
          <img
            className={s.btnCart__linkCart_cart}
            src="/images/icons/shopping-cart.svg"
            alt="shopping-cart"
          />
          <span>{totalCount}</span>
        </span>
      </NavLink>
    </div>
  );
};
