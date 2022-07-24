export type SortPropsType = {
  sortType: SortType;
  onClickSortCategory: (sortTypeName: SortType) => void;
};
export type SortType = {
  name: string;
  sortProperty: string;
};
