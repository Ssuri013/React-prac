import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdjDDsc_40dnsQq-5RtwiV8Xw-nnMdWxI';

YTSearch({key: API_KEY, term: 'smimey'}, (data) => {console.log(data)});
const App = function() {
  return (<div>hi there......dfcsdfcvdzfcvdsfvvfg
          <SearchBar />
          </div>
            );
};



ReactDOM.render(<App />, document.querySelector('.container'));
