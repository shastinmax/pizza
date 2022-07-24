import { SortType } from '../types';

export type ModalPropsType = {
  addCategory: (categoryName: SortType) => void;
  isShowClick: () => void;
};
