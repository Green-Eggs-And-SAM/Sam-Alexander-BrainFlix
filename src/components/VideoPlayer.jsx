import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
        <>
            <video
                className="video__player"
                poster={props.featuredVidID.image}
                controls
            ></video>
        </>
    );
}

export default VideoPlayer;
