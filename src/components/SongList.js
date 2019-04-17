import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import './SongList.css';

class SongList extends React.Component {
  render(){
    return(
      <div className="song-list">
        <h2>Song List</h2>
        <ul>
          {this.renderSongs()}
        </ul>
      </div>
    );
  }
  
  renderSongs(){
    return this.props.songs.map(song => {
      return (
        <li key={song.title}>
          <p>Title: {song.title}, duration: {song.duration}</p>
          <button className="btn" onClick={() => this.props.selectSong(song)}>Select</button>
        </li>
      )
    });
  }
}

const mapStateToProps = state => {
  return { songs: state.songs, selectSong: state.selectSong};
}

export default connect(mapStateToProps, {selectSong})(SongList);