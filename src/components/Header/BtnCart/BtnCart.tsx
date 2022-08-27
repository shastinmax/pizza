import React from 'react';

import { NavLink } from 'react-router-dom';

import { PathNavigation } from '../../../enums/navigation';
import { useAppSelector } from '../../../hooks/useAppSelectors';
import { selectItems, selectTotalPrice } from '../../../store/cart/selectors';

import s from './BtnCart.module.scss';

export const BtnCart = () => {
  const items = useAppSelector(selectItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <div>
      <NavLink className={`btn ${s.btnCart__linkCart}`} to={PathNavigation.SHOPPING_CART}>
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
          <span>{items.length}</span>
        </span>
      </NavLink>
    </div>
  );
};
