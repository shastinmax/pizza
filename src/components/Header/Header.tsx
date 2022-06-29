import React from 'react';

import { BtnCart } from './BtnCart/BtnCart';
import s from './Header.module.scss';
import { Logo } from './Logo/Logo';

export const Header = () => (
  <div className={s.header__wrapper}>
    <div className={s.header__inner}>
      <Logo />
      <div className={s.header__search}>
        <img src="/images/icons/search.svg" alt="search" />
        <input type="text " placeholder="поиск пиццы" />
      </div>
    </div>
    <BtnCart />
  </div>
);
