import React, { useState } from 'react';

// import { categories } from './Modal/constants/constants';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../hooks/useAppSelectors';
import { selectSortCategory } from '../../../store/filter/selectors';
import { setSortValue } from '../../../store/filter/slice';

import { Modal } from './Modal/Modal';
import s from './Sort.module.scss';
import { SortType } from './types';

export const Sort = () => {
  const dispatch = useDispatch();

  const itemCategorySort = useAppSelector(selectSortCategory);

  const [isShow, setIsShow] = useState<boolean>(false);

  const isShowClick = () => {
    setIsShow(!isShow);
  };

  const onClickSortCategory = (sortTypeName: SortType) => {
    dispatch(setSortValue(sortTypeName));
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
          {itemCategorySort.name}
        </span>
      </span>
      {isShow && <Modal addCategory={addCategory} isShowClick={isShowClick} />}
    </div>
  );
};
