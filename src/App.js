import React from 'react';
import './App.css';
import Navbar from './Components/layout/navbar.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './Components/pages/about.js';
import Home from './Components/pages/home.js';
import Login from './Components/pages/login.js';
import AuthState from './Context/auth/AuthState';
import Load from './Components/pages/load.js';
import PrivateRoute from './Components/Routing/privateRoute'
require('dotenv').config()



function App() {
  return (
    <AuthState>
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Load}/>
        <PrivateRoute exact path='/home' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
    </Router>
    </AuthState>
  );
}

export default App;
