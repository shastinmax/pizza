export type InitialStateType = {
  items: ItemsPropsType[];
};
export type ItemsPropsType = {
  id: number;
  price: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  count: number;
};
