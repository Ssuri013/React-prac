import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
state = { albums: [] };

  componentWillMount() {
    console.log('hey comp will mount');
  //  fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=02e9223fde79ec297c7081380ca1fff1')
    //  .then((response) => console.log(response));
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }

renderAlbums() {
  return this.state.albums.map(album => <AlbumDetail album={album} />);
}

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
