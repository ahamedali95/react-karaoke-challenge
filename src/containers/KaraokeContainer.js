import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      lyrics: ""
    }
  }

  componentDidMount() {
    this.fetchSongs("");
  }

  fetchSongs = (songKeyword) => {
    fetch("https://demo.lovescomputers.com/songs")
    .then(response => response.json())
    .then(data => {
      return data.filter((songObj) => {
        return songObj.title.toLowerCase().includes(songKeyword);
      });
    })
    .then(newSongs => {
      this.setState({
        songs: newSongs
      });
    })
  }

  handleSearch = (searchKeyword) => {
    this.fetchSongs(searchKeyword)
  }

  playSong = (lyrics1) => {
    this.setState({
      lyrics: lyrics1
    });
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
          <SongList songs={this.state.songs} playSong={this.playSong}/>
        </div>
        <KaraokeDisplay lyrics={this.state.lyrics}/>
      </div>
    );
  }
}

export default KaraokeContainer;
