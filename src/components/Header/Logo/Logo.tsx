import React from 'react';

import { NavLink } from 'react-router-dom';

import { PathNavigation } from '../../../enums/navigation';

export const Logo = () => (
  <div>
    <NavLink to={PathNavigation.PRODUCT}>
      <img src="/images/icons/logo.svg" alt="logo" />
    </NavLink>
  </div>
);
