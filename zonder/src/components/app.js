import React, { Component } from 'react';
import BookList from '../reducers/reducer_books';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
