function Track({ track, isAdd, action }) {
    return (
        <li>
            <p>{track.name}</p>
            <p>{track.artist}</p>
            {
                isAdd ? <button onClick={()=>action(track)}>+</button> : <button onClick={()=>action(track)}>-</button>
            }
        </li>
    );
}

export default Track;