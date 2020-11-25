/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import SideBar from './SideBar';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="right">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
