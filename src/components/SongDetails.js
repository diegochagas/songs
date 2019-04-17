import React from 'react';
import { connect } from 'react-redux';
import './SongDetails.css';

const SongDetails = props => {
  if(!props.selectedSong){
    return (
      <div className="progress-bar">
        <h2>Select song</h2>
        <progress></progress>
      </div>
    );
  }

  return(
    <div className="song-details">
      <h2>Details for:</h2>
      <div className="description">
        <p>Title: {props.selectedSong.title}</p>
        <p>Length: {props.selectedSong.duration}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);