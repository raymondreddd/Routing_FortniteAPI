import './App.css';
import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Itemdetail from './Itemdetail';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 


function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={Itemdetail} />
      </Switch>
    </div>
    </Router>
    
  );
}



export default App;
