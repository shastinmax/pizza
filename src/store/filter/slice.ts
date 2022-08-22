import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType } from './types';

const initialState: InitialStateType = {
  itemCategoryIndex: 0,
  itemSortValue: {
    name: 'популярности',
    sortProperty: 'property',
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      // eslint-disable-next-line no-param-reassign
      state.itemCategoryIndex = action.payload;
    },
    setSortValue(state, action: PayloadAction<{ name: string; sortProperty: string }>) {
      // eslint-disable-next-line no-param-reassign
      state.itemSortValue = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      // eslint-disable-next-line no-param-reassign
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setSortValue, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
