import Comment from './Comment';

function CommentList(props) {
    console.log('props ');
    console.log(props);
    return (
        <>
            {props.comments.map((comment) => (
                <Comment data={comment} key={comment.id} />
            ))}
        </>
    );
}

export default CommentList;
