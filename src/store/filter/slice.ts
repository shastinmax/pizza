import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType } from './types';

const initialState: InitialStateType = {
  itemCategoryIndex: 0,
  itemSortValue: {
    name: 'популярности',
    sortProperty: 'property',
  },
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
  },
});

export const { setCategoryId, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
