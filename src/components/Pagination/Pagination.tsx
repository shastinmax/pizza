import React from 'react';

import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';
import { PaginationPropsType } from './types';

const INITIAL_VALUES = 1;

export const Pagination = (props: PaginationPropsType) => {
  const { setCurrentPage, currentPage } = props;
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={e => setCurrentPage(e.selected + INITIAL_VALUES)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - INITIAL_VALUES}
    />
  );
};
