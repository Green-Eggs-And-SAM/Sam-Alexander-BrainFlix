import './SideBar.scss';

function SideBar(props) {
    console.log('sidebar');
    console.log(props.videoThumbnails);

    return (
        <>
            <ul>
                {props.videoThumbnails
                    .filter((video) => video.id !== props.featuredVidID)
                    .map((video) => (
                        <li
                            key={video.id}
                            onClick={() => props.handleClick(video.id)}
                        >
                            <img src={video.image} className="sidebar__img" />
                            <h5>{video.title}</h5>
                            <p>{video.channel}</p>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default SideBar;
