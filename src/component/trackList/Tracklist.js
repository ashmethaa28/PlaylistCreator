import Track from '../track/Track';

function Tracklist({ tracks, isAdd, action }) {
    return (
        <ul>
            {
                tracks?.map((t) => (
                       <Track track={t} isAdd={isAdd} action={action} />    
                ))
            }
        </ul>
    );
}

export default Tracklist;