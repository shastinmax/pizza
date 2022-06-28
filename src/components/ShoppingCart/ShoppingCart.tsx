import React from 'react';

import s from './ShoppingCart.module.scss';
import { ShoppingCartFooter } from './ShoppingCartFooter/ShoppingCartFooter';
import { ShoppingCartHeader } from './ShoppingCartHeader/ShoppingCartHeader';
import { ShoppingCartItem } from './ShoppingCartItem/ShoppingCartItem';
import { ShoppingCartTotal } from './ShoppingCartTotal/ShoppingCartTotal';

export const ShoppingCart = () => (
  <div className={s.container}>
    <ShoppingCartHeader />

    <div className={s.shoppingCart__shoppingCartItem}>
      <ShoppingCartItem />
      <ShoppingCartItem />
    </div>

    <ShoppingCartTotal />

    <ShoppingCartFooter />
  </div>
);
