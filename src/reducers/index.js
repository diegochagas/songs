import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: "Strangers Like Me", duration: "3:00"},
    {title: "Planet Hell", duration: "4:38"},
    {title: "Parpemoon", duration: "4:16"},
    {title: "This Is Your Time", duration: "4:29"},
    {title: "All Star", duration: "3:15"}
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});