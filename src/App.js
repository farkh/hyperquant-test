import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Workspace from './Components/Workspace/Workspace';
import Dashboard from './Pages/Dashboard/Dashboard';

store.subscribe(() => {
  localStorage.setItem('ReduxState', JSON.stringify(store.getState()));
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Workspace>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            
            <Redirect to="/dashboard" />
          </Switch>
        </Workspace>
      </Router>
    </Provider>
  );
}

export default App;
