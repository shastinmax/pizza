import React from 'react';

import { NavLink } from 'react-router-dom';

import Btn from '../../../common/Btn/Btn';
import { PathNavigation } from '../../../enums/navigation';
import s from '../ShoppingCart.module.scss';

export const ShoppingCartFooter = () => (
  <div className={s.shoppingCart__footer}>
    <NavLink className={`btn ${s.shoppingCart__btnBack}`} to={PathNavigation.PRODUCT}>
      Вернуться назад
    </NavLink>
    <Btn title="Оплатить сейчас" className={s.shoppingCart__btnPay} />
    {/* <button type="button" className={`btn ${s.shoppingCart__btnPay}`}> */}
    {/*  Оплатить сейчас */}
    {/* </button> */}
  </div>
);
