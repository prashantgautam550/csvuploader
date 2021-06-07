import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Main from './Components/Main';

class App extends Component {

  

  render () {
 
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <Route exact path="/" component={Main}/>
        </div>
      </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
