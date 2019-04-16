import React, { Component } from 'react';
import './App.css';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongList/>
        <SongDetails/>
      </div>
    );
  }
}

export default App;
