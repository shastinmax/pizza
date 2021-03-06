import React from 'react';

import { NavLink } from 'react-router-dom';

// import Btn from '../../common/Btn/Btn';
import { PathNavigation } from '../../enums/navigation';

import s from './EmptyShoppingCart.module.scss';

const EmptyShoppingCart = () => (
  <div className={s.emptyShoppingCart__container}>
    <h2 className={s.emptyShoppingCart__title}>
      Корзина пустая <img src="/images/smile.jpg" alt="smile" />
    </h2>
    <p className={s.emptyShoppingCart__text}>
      Вероятней всего, вы не заказывали ещё пиццу.
      <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img
      className={s.emptyShoppingCart__smile}
      src="/images/shopping-man.jpg"
      alt="man"
    />
    {/* <Btn title="Вернуться назад" className={s.emptyShoppingCart__btn} /> */}
    <NavLink className={`btn ${s.emptyShoppingCart__btn}`} to={PathNavigation.PRODUCT}>
      Вернуться назад
    </NavLink>
  </div>
);

export default EmptyShoppingCart;
