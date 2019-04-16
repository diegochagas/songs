import React, { Component } from 'react';
import './App.css';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongsList/>
        <SongDetails/>
      </div>
    );
  }
}

export default App;
