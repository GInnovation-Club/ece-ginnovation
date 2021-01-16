import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/Sass/main.scss';
import Home from './PageComponets/Home';
import Navigation from './UiComponents/Navigation';
import Login from './PageComponets/Login';
import ProfilePage from './PageComponets/ProfilePage';
import Signup from './PageComponets/Signup';
import { Provider } from 'react-redux';
import store from './store';
import Error from './PageComponets/Error';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/ece-ginnovation' component={Home} />
            <Route exact path='/ece-ginnovation/login' component={Login} />
            <Route exact path='/ece-ginnovation/signup' component={Signup} />
            <Route
              exact
              path='/ece-ginnovation/profile'
              component={ProfilePage}
            />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
