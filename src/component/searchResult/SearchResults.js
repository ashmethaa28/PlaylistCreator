import Tracklist from '../trackList/Tracklist';
import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults({ result, onAdd }) {

    return (
        <div className={styles.div}>
            <p>Search result for '{result}':</p>
            <Tracklist tracks={result} isAdd={true} action={onAdd} />
        </div>
    );
}

export default SearchResults;