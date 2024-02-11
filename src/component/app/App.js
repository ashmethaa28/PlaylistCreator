import './App.css';
import Playlist from '../playlist/Playlist';
import SearchBar from '../searchBar/SearchBar';
import SearchResults from '../searchResult/SearchResults';
import { useState } from 'react';
import styles from './App.module.css'

function App() {
  const [search, setSearch] = useState('');
  const [playlist, setPlayList] = useState([]);
  const [result, setResult] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const searchInputHandler = (newSearch) => {
    setSearch(newSearch);

    //TODO: setResult using API
    setResult([]);
  }

  const addListItemHandler = (addSong) => {
    setPlayList(prev => [...prev, addSong]);
  }

  const removeListItemHandler = (removeSong) => {
    setPlayList(prev => (prev.filter(songInfo => (songInfo.id === removeSong))));
  }

  const playlistNameHandler = (newPlaylistName) => {
    setPlaylistName(newPlaylistName);

    //TODO: send information to api

    setPlayList([]);
    setPlaylistName('');
  }

  return (
    <div>
      <h1 className={styles.h1}>Ja<font className={styles.mmm}>mmm</font>ing</h1>
      <SearchBar 
        onSearch={searchInputHandler} 
      />
      <div className={styles.div}>
        <SearchResults 
          result={result} 
          onAdd={addListItemHandler} 
        />
        <Playlist 
          tracks={playlist} 
          onRemove={removeListItemHandler}
          onNamed={playlistNameHandler}
        />
      </div>
    </div>
  );
}

export default App;

