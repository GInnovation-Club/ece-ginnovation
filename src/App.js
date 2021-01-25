import React from 'react';
//router imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//sass imports
import '../src/Sass/main.scss';
//aos animation
import Aos from 'aos';
import 'aos/dist/aos.css';
//components import
import Home from './Components/PageComponets/Home';
import Navigation from './Components/UiComponents/Navigation/Navigation';
import Login from './Components/PageComponets/Login';
import ProfilePage from './Components/PageComponets/ProfilePage';
import Signup from './Components/PageComponets/Signup';
import Error from './Components/PageComponets/Error';
import AboutDevelopers from './Components/PageComponets/AboutDevelopers';
import AboutGinnovation from './Components/PageComponets/AboutGinnovation';
function App() {
  Aos.init({ duration: 100 });
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
          <Route
            exact
            path='/ece-ginnovation/about/developers'
            component={AboutDevelopers}
          />
          <Route
            exact
            path='/ece-ginnovation/about'
            component={AboutGinnovation}
          />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
