import React, { useState } from 'react';

// import { categories } from './Modal/constants/constants';
import { Modal } from './Modal/Modal';
import s from './Sort.module.scss';
import { SortPropsType, SortType } from './types';

export const Sort = (props: SortPropsType) => {
  const { sortType, onClickSortCategory } = props;

  const [isShow, setIsShow] = useState<boolean>(false);
  // const [category, setCategory] = useState('популярности');

  const isShowClick = () => {
    setIsShow(!isShow);
  };

  const addCategory = (categoryName: SortType) => {
    onClickSortCategory(categoryName);
  };

  return (
    <div className={s.sort}>
      <img src="/images/icons/arrow-top.svg" alt="arrow" />
      <span className={s.sort__text}>
        Сортировка по:{' '}
        <span role="presentation" onClick={isShowClick}>
          {sortType.name}
        </span>
      </span>
      {isShow && <Modal addCategory={addCategory} isShowClick={isShowClick} />}
    </div>
  );
};
