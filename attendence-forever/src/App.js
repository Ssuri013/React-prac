import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './containers/Forms';
import Result from './containers/Result';


class App extends Component {



render(){
  return (
  <div>
  <Forms />
  <Result />
  </div>
);
}

}

export default App;
