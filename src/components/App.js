/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SideBar from './SideBar';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <SideBar />
        <div className="right">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
