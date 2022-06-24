import React from 'react';

import { NavLink } from 'react-router-dom';

import { PathNavigation } from '../../../enums/navigation';

import s from './BtnCart.module.scss';

export const BtnCart = () => (
  <div>
    <NavLink className={`btn ${s.btnCart__linkCart}`} to={PathNavigation.SHOPPING_CART}>
      <span>530</span>
      <img
        className={s.btnCart__linkCart_ruble}
        src="/images/icons/ruble.svg"
        alt="ruble"
      />
      <span className={s.border} />
      <img src="" alt="shopping-cart" />
    </NavLink>
  </div>
);
