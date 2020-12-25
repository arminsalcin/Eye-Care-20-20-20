import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainScreen} />
      </Switch>
    </Router>
  );
}
