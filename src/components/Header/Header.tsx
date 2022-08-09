import React from 'react';

import { BtnCart } from './BtnCart/BtnCart';
import s from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { SearchPropsType } from './types';

export const Header = (props: SearchPropsType) => {
  const { searchValue, setSearchValue } = props;

  console.log(searchValue, 'search');

  return (
    <div className={s.header__wrapper}>
      <Logo />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <BtnCart />
    </div>
  );
};
