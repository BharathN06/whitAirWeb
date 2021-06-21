import React from 'react';
import {  Route,  BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import MainHeader from './components/Header'
import MainFooter from './components/Footer'

function App() {
  return (
    <div className="App">
       <Router>
        <MainHeader/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Product" component={Product} />
          </Switch>
          <MainFooter/>
      </Router>
    </div>
  );
}

export default App;
