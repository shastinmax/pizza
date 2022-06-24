import React from 'react';

import s from './Btn.module.scss';
import { BtnTypeProps } from './types';

const Btn = (props: BtnTypeProps) => {
  const { title } = props;
  return (
    <div>
      <button className={`btn ${s.btnItem}`} type="button">
        {title}
      </button>
    </div>
  );
};

export default Btn;
