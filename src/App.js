import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../src/Sass/main.scss';
import Home from './PageComponets/Home';
import Navigation from './UiComponents/Navigation';
import Login from './PageComponets/Login';
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/ece-ginnovation' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
