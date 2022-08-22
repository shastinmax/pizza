import React, { ChangeEvent, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash.debounce';

import { SearchPropsType } from '../types';

import s from './Search.module.scss';

export const Search = (props: SearchPropsType) => {
  const { setSearchValue } = props;
  const [value, setValue] = useState('');

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 1000),
    [],
  );
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    updateSearchValue(e.currentTarget.value);
  };
  const onCLearInputClick = () => {
    setSearchValue('');
    setValue('');
  };

  return (
    <div className={s.search}>
      <img className={s.search__search} src="/images/icons/search.svg" alt="search" />
      <input
        value={value}
        onChange={onChangeSearchInput}
        type="text "
        placeholder="поиск пиццы"
      />
      {value && (
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
