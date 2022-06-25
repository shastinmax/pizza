import React from 'react';

import { Modal } from './Modal/Modal';
import s from './Sort.module.scss';

export const Sort = () => (
  <div className={s.sort}>
    <img src="/images/icons/arrow-top.svg" alt="arrow" />
    <span className={s.sort__text}>
      Сортировка по: <span>популярности</span>
    </span>
    <Modal />
  </div>
);
