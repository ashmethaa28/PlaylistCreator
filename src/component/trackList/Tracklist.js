import Track from '../track/Track';

function Tracklist({ tracks, isAdd, action }) {
    return (
        <ul>
            {
                tracks?.map(({name, artist, id}) => (
                       <Track songName={name} artist={artist} id={id} isAdd={isAdd} action={action} />    
                ))
            }
        </ul>
    );
}

export default Tracklist;