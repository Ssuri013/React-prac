import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";


class Search extends Component {
  const API_url = "https://yts.am/api/v2/list_movies.json";
  constructor(){
    super(props);
    this.state = {term: '' };
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..."/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
