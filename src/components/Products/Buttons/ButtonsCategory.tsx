import React from 'react';

import Btn from '../../../common/Btn/Btn';

import s from './ButtonsCategory.module.scss';
import { categories } from './Constants/constants';
import { ButtonsCategoryPropsType } from './types';

export const ButtonsCategory = (props: ButtonsCategoryPropsType) => {
  const { category, onClickCategory } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        {categories.map((categoryName, i) => (
          <Btn
            key={categoryName}
            title={categoryName}
            callback={() => onClickCategory(i)}
            className={category === i ? s.buttons__active : s.buttons__item}
          />
        ))}
      </div>
    </div>
  );
};
