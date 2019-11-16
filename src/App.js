import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './common/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <div className="App h-100">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/home" component={Home} />
            <Route render={() => <Redirect to="/login" />} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
