import React from 'react';

import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks/useAppSelectors';
import { selectPageCount } from '../../store/filter/selectors';
import { setPageCount } from '../../store/filter/slice';

import s from './Pagination.module.scss';

const INITIAL_VALUES = 1;

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useAppSelector(selectPageCount);
  const onPageCountClick = (e: { selected: number }) => {
    dispatch(setPageCount(e.selected + INITIAL_VALUES));
  };

  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      // onPageChange={e => setCurrentPage(e.selected + INITIAL_VALUES)}
      onPageChange={e => onPageCountClick(e)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - INITIAL_VALUES}
    />
  );
};
