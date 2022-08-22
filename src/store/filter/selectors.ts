import { RootState } from '../store';

import { ItemSortValueType } from './types';

export const selectCategoryIndex = (state: RootState): number =>
  state.filter.itemCategoryIndex;
export const selectSortCategory = (state: RootState): ItemSortValueType =>
  state.filter.itemSortValue;
export const selectPageCount = (state: RootState): number => state.filter.pageCount;
