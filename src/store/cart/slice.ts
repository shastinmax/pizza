import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType, ItemsPropsType } from './types';

const initialState: InitialStateType = {
  totalPrice: 0,
  items: [],
};

const FIRST_COUNT = 0;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<ItemsPropsType>) {
      const findItem = state.items.find(item => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.count,
        FIRST_COUNT,
      );
    },
    removeItems(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item: { id: number }) => item.id !== action.payload,
      );
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.count,
        FIRST_COUNT,
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    decCount(state, action: PayloadAction<number>) {
      const findItem = state.items.find(item => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.count,
        FIRST_COUNT,
      );
    },
  },
});

export const { addItems, removeItems, clearItems, decCount } = cartSlice.actions;

export default cartSlice.reducer;
