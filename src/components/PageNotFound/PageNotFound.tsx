import React from 'react';

import s from './style.module.scss';

export const PageNotFound = () => (
  <div>
    <h1 className={s.root}>
      <span>😕</span>
      <br />
      Page Not Found{' '}
    </h1>
  </div>
);
