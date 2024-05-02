import './VideoPlayer.scss';

function VideoPlayer(props) {
    console.log('props');
    console.log(props);

    return (
        <>
            <video
                className="video__player"
                poster={props.data.image}
                controls
            ></video>
            <h1>{props.data.title}</h1>
            <h3>By {props.data.channel}</h3>
            <p></p>
            <p>views {props.data.views}</p>
            <p>likes {props.data.likes}</p>
        </>
    );
}

export default VideoPlayer;
