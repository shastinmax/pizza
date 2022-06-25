import React from 'react';

import s from './Modal.module.scss';

export const Modal = () => (
  <div className={s.modal}>
    <p>
      <span>популярности</span>
    </p>
    <p>
      <span>по цене</span>
    </p>
    <p>
      <span>по алфавиту</span>
    </p>
  </div>
);
