import React, { useState } from 'react';

import { Modal } from './Modal/Modal';
import s from './Sort.module.scss';

export const Sort = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [category, setCategory] = useState('популярности');

  const isShowClick = () => {
    setIsShow(!isShow);
  };

  const addCategory = (categoryName: string) => {
    setCategory(categoryName);
  };

  return (
    <div className={s.sort}>
      <img src="/images/icons/arrow-top.svg" alt="arrow" />
      <span className={s.sort__text}>
        Сортировка по:{' '}
        <span role="presentation" onClick={isShowClick}>
          {category}
        </span>
      </span>
      {isShow && <Modal addCategory={addCategory} isShowClick={isShowClick} />}
    </div>
  );
};
