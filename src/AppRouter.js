import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Switch>{/* <Route exact path='/' component={HomePage} /> */}</Switch>
    </Router>
  );
};

export default AppRouter;
