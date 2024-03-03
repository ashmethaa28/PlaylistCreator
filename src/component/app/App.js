import './App.css';
import Playlist from '../playlist/Playlist';
import SearchBar from '../searchBar/SearchBar';
import SearchResults from '../searchResult/SearchResults';
import { useState } from 'react';
import styles from './App.module.css';
import { Spotify } from '../util/Spotify/Spotify';

function App() {
  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [result, setResult] = useState([]);

  const searchInputHandler = (newSearch) => {
    setSearch(newSearch);

    Spotify.search(newSearch).then(r => setResult(r));
  }

  const addListItemHandler = (track) => {
    setPlaylist(prev => [...prev, track]);
  }

  const removeListItemHandler = (track) => {
    setPlaylist(prev => (prev.filter((song) => song.id !== track.id)));
  }

  const playlistSaved = (playlistName) => {
    //TODO: send information to api

  }

  return (
    <div>
      <h1 className={styles.h1}>Ja<font className={styles.mmm}>mmm</font>ing</h1>
      <SearchBar 
        onSearch={searchInputHandler} 
      />
      <div className={styles.div}>
        <SearchResults 
          search={search}
          result={result} 
          onAdd={addListItemHandler} 
        />
        <Playlist 
          tracks={playlist} 
          onRemove={removeListItemHandler}
          onSaved={playlistSaved}
        />
      </div>
    </div>
  );
}

export default App;

