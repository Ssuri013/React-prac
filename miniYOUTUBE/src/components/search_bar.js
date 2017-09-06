import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {term: '' };
  }

  render() {

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