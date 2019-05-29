import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Workspace from './Components/Workspace/Workspace';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Workspace>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          
          <Redirect to="/dashboard" />
        </Switch>
      </Workspace>
    </Router>
  );
}

export default App;
