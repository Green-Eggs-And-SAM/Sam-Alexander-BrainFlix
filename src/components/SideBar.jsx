import './SideBar.scss';

function SideBar(props) {
    console.log('sidebar');
    console.log(props.videoThumbnails);

    return (
        <>
            <section className="sidebar">
                <h3 className="sidebar__header">NEXT VIDEOS</h3>
                <ul>
                    {props.videoThumbnails
                        .filter((video) => video.id !== props.featuredVidID)
                        .map((video) => (
                            <li
                                key={video.id}
                                onClick={() => props.handleClick(video.id)}
                                className="sidebar__thumbnail"
                            >
                                <img
                                    src={video.image}
                                    className="sidebar__thumbnail--img"
                                />
                                <div className="sidebar__thumbnail--text">
                                    <h5>{video.title}</h5>
                                    <p>{video.channel}</p>
                                </div>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}

export default SideBar;
