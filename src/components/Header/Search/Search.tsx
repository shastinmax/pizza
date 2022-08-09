import React, { ChangeEvent } from 'react';

import { SearchPropsType } from '../types';

import s from './Search.module.scss';

export const Search = (props: SearchPropsType) => {
  const { searchValue, setSearchValue } = props;

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onCLearInputClick = () => {
    setSearchValue('');
  };

  return (
    <div className={s.search}>
      <img className={s.search__search} src="/images/icons/search.svg" alt="search" />
      <input
        value={searchValue}
        onChange={onChangeSearchInput}
        type="text "
        placeholder="поиск пиццы"
      />
      {searchValue && (
        <img
          role="presentation"
          onClick={onCLearInputClick}
          className={s.search__close}
          src="/images/icons/close.svg"
          alt="close"
        />
      )}
    </div>
  );
};
