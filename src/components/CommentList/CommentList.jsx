import Comment from './Comment';

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
