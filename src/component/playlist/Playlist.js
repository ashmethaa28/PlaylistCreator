import Tracklist from "../trackList/Tracklist";
import React, { useState } from 'react';
import styles from './Playlist.module.css';

function Playlist({ tracks, onRemove, onNamed }) {
    const [name, setName] = useState('');

    const submitHandler = () => {
        onNamed(name);
    }

    return (
        <div className={styles.div}>
            <form onSubmit={submitHandler} className={styles.form}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                <Tracklist tracks={tracks} isAdd={false} action={onRemove} />
                <button type='submit' className={styles.button} >Save To Spotify</button>
            </form>    
        </div>
    );
}

export default Playlist;