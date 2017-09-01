import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAdjDDsc_40dnsQq-5RtwiV8Xw-nnMdWxI';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {videos: ''};

    YTSearch({key: API_KEY, term: 'smiley'}, (videos) => {this.setState({videos} ); console.log({videos}) } );

  }

  render(){
  return (<div>hi there......dfcsdfcvdzfcvdsfvvfg
          <SearchBar />
          <VideoList videos = {this.state.videos} />
          </div>
            );
  }
};



ReactDOM.render(<App />, document.querySelector('.container'));
