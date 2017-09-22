import React, { Component } from 'react';

export default class Forms extends Component{

  constructor(props){

    super(props);
    this.state = {};
    this.setHr = this.setHr.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setLeaves = this.setLeaves.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    

  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  setHr(e){
    this.setState( {hr: e.target.value} );
    console.log(this.state.hr);
  }
  setDate(e){
    this.setState( {date: e.target.value} );
  }
  setLeaves(e){
    this.setState( {leaves: e.target.value} );
  }





  render() {
    return (
      <form onSubmit={this.onFormSubmit} className = "input-group">
      <div className = "form-group">
      <label> Hours </label>
      <input type="number" value= {this.state.hr} onChange={this.setHr}/>
      </div>
      <div className = "form-group">
      <label> Date of current month</label>
      <input type="number" value= {this.state.date} onChange={this.setDate}/>
      </div>
      <div className = "form-group">
      <label> leaves</label>
      <input type="number" value= {this.state.leaves} onChange={this.setLeaves} />
      </div>
      <button type="submit" className="btn btn-secondary"> Submit </button>
      </form >

    );
  }
}
