import React from 'react';

import { BtnTypeProps } from './types';

const Btn = (props: BtnTypeProps) => {
  const { title, className, callback } = props;
  const setActiveBtn = () => {
    if (callback) {
      callback();
    }
  };
  return (
    <div>
      <button onClick={setActiveBtn} className={`btn ${className}`} type="button">
        {title}
      </button>
    </div>
  );
};

export default Btn;
