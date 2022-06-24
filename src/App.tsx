import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header/Header';
import { PathNavigation } from './enums/navigation';

export const App = () => (
  <div className="wrapper">
    <Header />
    <Routes>
      <Route path={PathNavigation.PRODUCT} element="hello" />
      <Route path={PathNavigation.SHOPPING_CART} element="cart" />
    </Routes>
  </div>
);
