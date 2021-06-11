import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import NotFound from './pages/not_found/NotFound';


function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;