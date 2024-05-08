import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
        <>
            <video
                className="video__player"
                poster={props.featuredVid.image}
                controls
            ></video>
        </>
    );
}

export default VideoPlayer;
