import React from 'react';

import { BtnTypeProps } from './types';

const Btn = (props: BtnTypeProps) => {
  const { title, className } = props;
  return (
    <div>
      <button className={`btn ${className}`} type="button">
        {title}
      </button>
    </div>
  );
};

export default Btn;
