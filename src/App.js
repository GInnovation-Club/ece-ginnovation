import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import '../src/Sass/main.scss';
import Home from './PageComponets/Home';
import Navigation from './UiComponents/Navigation';
import Login from './PageComponets/Login';
import ProfilePage from './PageComponets/ProfilePage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/ece-ginnovation' component={Home} />
          <Route exact path='/ece-ginnovation/login' component={Login} />
          <Route
            exact
            path='/ece-ginnovation/profile'
            component={ProfilePage}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
