function Track({ artist, songName, id, isAdd, action }) {
    return (
        <li>
            <p>{artist}</p>
            <p>{songName}</p>
            {
                isAdd ? <button onClick={()=>action(id)}>+</button> : <button onClick={()=>action(id)}>-</button>
            }
        </li>
    );
}

export default Track;