import Comment from './Comment';
// import CommentData from '../data/video-details.json';

function CommentList(props) {
    return (
        <>
            {props.comments.map((comment) => (
                <Comment data={comment} key={comment.id} />
            ))}
        </>
    );
}

export default CommentList;
