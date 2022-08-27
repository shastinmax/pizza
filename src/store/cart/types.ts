export type InitialStateType = {
  totalPrice: number;
  items: ItemsPropsType[];
};
export type ItemsPropsType = {
  id: number;
  price: number;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
};
