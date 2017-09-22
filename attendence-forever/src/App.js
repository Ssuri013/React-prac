import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <form className = "form-horizontal">
      <div className = "form-group">
      <label> Hours</label>
      <input />
      </div>
      <div className = "form-group">
      <label> date</label>
      <input />
      </div>
      <div className = "form-group">
      <label> leaves</label>
      <input />
      </div>
      <button type="submit" className="btn btn-secondary"> submit </button>
      </form >
    );
  }
}

export default App;
