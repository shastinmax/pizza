import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType, ItemsPropsType } from './types';

const initialState: InitialStateType = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<ItemsPropsType>) {
      state.items.push(action.payload);
    },
    removeItems(state, action: PayloadAction<number>) {
      state.items.filter((item: { id: number }) => item.id !== action.payload);
    },
    clearItems(state) {
      // eslint-disable-next-line no-param-reassign
      state.items = [];
    },
    addTotalPrice(state, action: PayloadAction<number>) {
      // eslint-disable-next-line no-param-reassign
      state.totalPrice += action.payload;
    },
  },
});

export const { addItems, removeItems, clearItems, addTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
