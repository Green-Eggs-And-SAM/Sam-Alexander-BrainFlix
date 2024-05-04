import './VideoDescription.scss';
import viewsIcon from '../assets/icons/views.svg';
import likesIcon from '../assets/icons/likes.svg';

function VideoDescription(props) {
    function timestampToDate(timestamp) {
        let today;
        //if there is a timestamp then format timestamp to date.
        if (timestamp) today = new Date(timestamp);
        //otherwise set current day.
        else today = new Date();
        let year = today.getFullYear();
        let month = addZero(today.getMonth() + 1);
        let day = addZero(today.getDate());
        return month + '/' + day + '/' + year;
    }

    function addZero(number) {
        if (number < 10) return '0' + number;
        else return number;
    }

    return (
        <>
            {/* <video
                className="video__player"
                poster={props.data.image}
                controls
            ></video> */}
            <section className="video__about">
                <h1 className="video__dividing-line">{props.data.title}</h1>
                <div className="video__subheader video__dividing-line">
                    <div className="video__info-pair">
                        <h5 className="right-margin">
                            By {props.data.channel}
                        </h5>
                        <p className="right-margin">
                            {timestampToDate(props.data.Date)}
                        </p>
                    </div>
                    <div className="video__info-pair">
                        <p className="right-margin center-align">
                            <img
                                src={viewsIcon}
                                alt="views "
                                className="video__icon"
                            />
                            {props.data.views}
                        </p>
                        <p className="center-align">
                            <img
                                src={likesIcon}
                                alt="likes "
                                className="video__icon "
                            />
                            {props.data.likes}
                        </p>
                    </div>
                </div>
                <p>{props.data.description}</p>
            </section>
        </>
    );
}

export default VideoDescription;
