import React from 'react';

import Btn from '../../../common/Btn/Btn';

import s from './Buttons.module.scss';
import { btns } from './Constants/constants';

export const Buttons = () => (
  <div className={s.buttons}>
    {btns.map(btn => (
      <Btn key={btn} title={btn} className={s.btnItem} />
    ))}
  </div>
);
