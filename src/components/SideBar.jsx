import './SideBar.scss';
import { Link } from 'react-router-dom';

function SideBar(props) {
    //if no id (on home page '/') then exlude defualt video.
    const id = props.id ? props.id : props.defaultId;

    //display all videos except for the featured video
    return (
        <>
            <section className="sidebar">
                <h5 className="sidebar__header">NEXT VIDEOS</h5>
                <ul>
                    {props.videoThumbnails
                        .filter((video) => video.id !== id)
                        .map((video) => (
                            <Link
                                to={`/video-details/${video.id}`}
                                key={video.id}
                            >
                                <li
                                    key={video.id}
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
                            </Link>
                        ))}
                </ul>
            </section>
        </>
    );
}

export default SideBar;
