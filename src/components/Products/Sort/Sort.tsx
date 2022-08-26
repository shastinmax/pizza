import React, { useEffect, useRef, useState } from 'react';

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
  const sortRef = useRef<HTMLInputElement>(null);

  const isShowClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (sortRef.current && !e.path.includes(sortRef.current)) {
        setIsShow(false);
      }
    };

    document.body.addEventListener('click', handleClickOutSide);
    return () => document.body.removeEventListener('click', handleClickOutSide);
  }, []);

  const onClickSortCategory = (sortTypeName: SortType) => {
    dispatch(setSortValue(sortTypeName));
  };
  const addCategory = (categoryName: SortType) => {
    onClickSortCategory(categoryName);
  };

  return (
    <div ref={sortRef} className={s.sort}>
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
