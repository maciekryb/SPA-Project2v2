import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/products' component={ProductListPage} />
        <Route path='/product/:id' component={ProductPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/login' component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
