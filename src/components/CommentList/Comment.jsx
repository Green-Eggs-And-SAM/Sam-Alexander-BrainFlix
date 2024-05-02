import './Comment.scss';

function Comment(props) {
    // console.log('here');
    // console.log(props.data);
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
            <div className="comment">
                <article className="comment__user-comment comment__dividing-line">
                    <div className="comment__user">
                        <div className="comment__user-icon"></div>
                    </div>

                    <section className="comment__user-comment--container">
                        <div className="comment__user-comment--name-date-row">
                            <h5>{props.data.name}</h5>
                            <p>{timestampToDate(props.data.timestamp)}</p>
                        </div>
                        <p>{props.data.comment}</p>
                    </section>
                </article>
            </div>
        </>
    );
}

export default Comment;
