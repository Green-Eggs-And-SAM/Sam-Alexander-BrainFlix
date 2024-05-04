import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
        <>
            <video
                className="video__player"
                poster={props.data.image}
                controls
            ></video>
        </>
    );
}

export default VideoPlayer;
