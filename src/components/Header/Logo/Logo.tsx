import React from 'react';

import { NavLink } from 'react-router-dom';

import { PathNavigation } from '../../../enums/navigation';

import s from './style.module.scss';

export const Logo = () => (
  <div>
    <NavLink to={PathNavigation.PRODUCT}>
      <img className={s.img} src="/images/icons/logo.svg" alt="logo" />
    </NavLink>
  </div>
);
