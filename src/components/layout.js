import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import AboutUs from './Pages/About'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
// import { Route, Router } from "react-router-dom";
import {  Route,  BrowserRouter as Router, Switch } from "react-router-dom";


import SideBarComponent from './Components/SideBarComponent'

import Grid from '@material-ui/core/Grid';



function App() {

  
  
  return (
    <div className="App">
     
     
       <Router>
         
        <div>
        
          <Grid container>
        
          <Grid item xs={12} sm={4} md={3} lg={2}> 
          <SideBarComponent/>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10} id='title'> 
          
          <Switch>
         
              
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
           
          </Switch>
         
          </Grid>
        
          </Grid>

        </div>

      </Router>
     
    </div>
  );

}

export default App;
