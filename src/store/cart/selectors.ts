import { RootState } from '../store';

export const selectItems = (state: RootState): any => state.cart.items;
export const selectTotalPrice = (state: RootState): number => state.cart.totalPrice;
