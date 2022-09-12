import { ItemsPropsType } from '../store/cart/types';

const START_SUM = 0;
export const calcTotalPrice = (items: ItemsPropsType[]) => {
  items.reduce((acc, item) => acc + item.price * item.count, START_SUM);
};
