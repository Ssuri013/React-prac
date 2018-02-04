import React, {Component} from 'react';
import axios from 'axios'
class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {term: '' };
  }

  render() {
    // Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    return <div className='search-bar'><input
    value = {this.state.term}
    onChange={ (event) => this.onInputChange(event.target.value)} /> </div>;
  }
  onInputChange(str){
    console.log(str);
    this.setState({term: str});
    this.props.onSearchTermChange(str);
  }
}

export default SearchBar;
