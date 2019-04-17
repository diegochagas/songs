import React from 'react';
import { connect } from 'react-redux';

const SongDetails = props => {
  if(!props.selectedSong){
    return <div>Select song</div>;
  }

  return(
    <div>
      <h1>Details for:</h1>
      <p>Title: {props.selectedSong.title}</p>
      <p>Length: {props.selectedSong.duration}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);