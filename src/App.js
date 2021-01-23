import React, { useEffect } from 'react';
//router imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//sass imports
import '../src/Sass/main.scss';
//redux
import store from './store';
import { Provider } from 'react-redux';
//components import
import Home from './Components/PageComponets/Home';
import Navigation from './Components/UiComponents/Navigation/Navigation';
import Login from './Components/PageComponets/Login';
import ProfilePage from './Components/PageComponets/ProfilePage';
import Signup from './Components/PageComponets/Signup';
import Error from './Components/PageComponets/Error';
import { useDispatch, useSelector } from 'react-redux';
import { userNameChange } from './store';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('name at app.js', localStorage.getItem('username'));
    dispatch(userNameChange(localStorage.getItem('username')));
  }, []);
  return (
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
  );
}
export default App;
