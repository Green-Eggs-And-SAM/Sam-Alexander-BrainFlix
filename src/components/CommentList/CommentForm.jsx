import defaultIcon from '../../assets/images/Mohan-muruge.jpg';
import './CommentForm.scss';
import commentIcon from '../../assets/icons/add_comment.svg';

function CommentForm(props) {
    function clickHandler(event) {
        event.preventDefault();
        if (event.target.value === 'Add a new comment') event.target.value = '';
        else console.log('do nothing');
    }

    return (
        <>
            <article className="comment-form dividing-line">
                <h5 className="comment-form__number-of-comments colour__bandsite-black">
                    {props.commentsLength} Comments
                </h5>
                <div className="comment-form__icon-form-pair">
                    <img src={defaultIcon} className="comment-form__icon" />
                    <section className="comment-form__container--outer">
                        <p className="colour__silver">JOIN THE CONVERSATION</p>
                        <form className="comment-form__container--inner">
                            <textarea
                                className="comment-form__input"
                                name="textbox"
                                value="Add a new comment"
                                onClick={clickHandler}
                            ></textarea>

                            <div className="submit-button__container">
                                <button className="submit-button__button">
                                    COMMENT
                                </button>
                                <img
                                    src={commentIcon}
                                    alt="comment"
                                    className="submit-button__icon"
                                />
                            </div>
                        </form>
                    </section>
                </div>
            </article>
        </>
    );
}

export default CommentForm;
