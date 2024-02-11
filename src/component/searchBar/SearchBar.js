import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
    const [text, setText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(text);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <input value={text} onChange={(e) => setText(e.target.value)} className={styles.input} />
            <button type='submit' className={styles.button} >Search</button>
        </form>
    );
}

export default SearchBar;