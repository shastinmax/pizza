import React from 'react';

import { BtnCart } from './BtnCart/BtnCart';
import s from './Header.module.scss';
import { Logo } from './Logo/Logo';

export const Header = () => (
  <div className={s.header__wrapper}>
    <Logo />
    <BtnCart />
  </div>
);
