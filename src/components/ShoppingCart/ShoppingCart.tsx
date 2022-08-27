import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelectors';
import { selectItems } from '../../store/cart/selectors';
import { ItemsPropsType } from '../../store/cart/types';

import s from './ShoppingCart.module.scss';
import { ShoppingCartFooter } from './ShoppingCartFooter/ShoppingCartFooter';
import { ShoppingCartHeader } from './ShoppingCartHeader/ShoppingCartHeader';
import { ShoppingCartItem } from './ShoppingCartItem/ShoppingCartItem';
import { ShoppingCartTotal } from './ShoppingCartTotal/ShoppingCartTotal';

export const ShoppingCart = () => {
  const items = useAppSelector(selectItems);
  return (
    <div className={s.container}>
      <ShoppingCartHeader />

      <div className={s.shoppingCart__shoppingCartItem}>
        {items.map((item: ItemsPropsType) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
        {/* <ShoppingCartItem /> */}
        {/* <ShoppingCartItem /> */}
      </div>

      <ShoppingCartTotal />
      <ShoppingCartFooter />
    </div>
  );
};
