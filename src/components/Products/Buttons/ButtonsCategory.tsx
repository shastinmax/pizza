import React, { useState } from 'react';

import Btn from '../../../common/Btn/Btn';

import s from './ButtonsCategory.module.scss';
import { btns } from './Constants/constants';

export const ButtonsCategory = () => {
  const [active, setActive] = useState(0);

  const onButtonClick = (i: number) => {
    setActive(i);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        {btns.map((btn, i) => (
          <Btn
            key={btn}
            title={btn}
            callback={() => onButtonClick(i)}
            className={active === i ? s.buttons__active : s.buttons__item}
          />
        ))}
      </div>
    </div>
  );
};
