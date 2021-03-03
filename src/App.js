import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navigator />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>404 Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
