import React from 'react';

import { useDispatch } from 'react-redux';

import Btn from '../../../common/Btn/Btn';
import { useAppSelector } from '../../../hooks/useAppSelectors';
import { selectCategoryIndex } from '../../../store/filter/selectors';
import { setCategoryId } from '../../../store/filter/slice';

import s from './ButtonsCategory.module.scss';
import { categories } from './Constants/constants';

export const ButtonsCategory = () => {
  const dispatch = useDispatch();

  const itemCategoryIndex = useAppSelector(selectCategoryIndex);
  const onClickCategory = (i: number) => {
    dispatch(setCategoryId(i));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        {categories.map((categoryName, i) => (
          <Btn
            key={categoryName}
            title={categoryName}
            callback={() => onClickCategory(i)}
            className={itemCategoryIndex === i ? s.buttons__active : s.buttons__item}
          />
        ))}
      </div>
    </div>
  );
};
