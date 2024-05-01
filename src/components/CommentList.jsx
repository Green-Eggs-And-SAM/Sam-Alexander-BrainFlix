import Comment from './Comment';
// import CommentData from '../data/video-details.json';

function CommentList(props) {
    //const data = JSON.parse(CommentData);

    console.log(props);
    return (
        <>
            {props.comments.map((comment) => (
                <Comment data={comment} />
            ))}
        </>
    );
}

export default CommentList;
