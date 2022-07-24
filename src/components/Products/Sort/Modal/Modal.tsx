import React from 'react';

import { SortType } from '../types';

import { categories } from './constants/constants';
import s from './Modal.module.scss';
import { ModalPropsType } from './types';

export const Modal = (props: ModalPropsType) => {
  const { addCategory, isShowClick } = props;

  const onAddCategoryClick = (categoryName: SortType) => {
    addCategory(categoryName);
    isShowClick();
  };

  return (
    <div className={s.modal}>
      {categories.map((category, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}>
          <span role="presentation" onClick={() => onAddCategoryClick(category)}>
            {category.name}
          </span>
        </p>
      ))}
    </div>
  );
};
