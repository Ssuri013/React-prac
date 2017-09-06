import React,{ Component } from 'react';
import {connect} from 'react-redux';

export default class BookList extends Component{

  renderList(){
    this.props.books.maps( (book)=>{
      return <li key={book.title} className="list-group-item">{book.title}</li>
    })
  }

  render(){
    return <ul className="list-group col-sm-4" >
      {this.renderList()}
    </ul>
  }

}

function mapStateToProps(){

}
