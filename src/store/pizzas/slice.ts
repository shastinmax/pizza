import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType, ItemsPropsType } from './types';

const initialState: InitialStateType = {
  items: [],
};

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ItemsPropsType[]>) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
