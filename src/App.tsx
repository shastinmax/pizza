import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.scss';
import EmptyShoppingCart from './components/EmptyShoppingCart/EmptyShoppingCart';
import { Header } from './components/Header/Header';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { PathNavigation } from './enums/navigation';

export const App = () => (
  <div className="wrapper">
    <div className="container">
      <Header />
      <Routes>
        <Route path={PathNavigation.PRODUCT} element={<Products />} />
        <Route path={PathNavigation.SHOPPING_CART} element={<ShoppingCart />} />
        <Route
          path={PathNavigation.EMPTY_SHOPPING_CART}
          element={<EmptyShoppingCart />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  </div>
);
