import defaultIcon from '../../assets/images/Mohan-muruge.jpg';
import './CommentForm.scss';
import commentIcon from '../../assets/icons/add_comment.svg';

function CommentForm(props) {
    return (
        <>
            <article className="comment-form dividing-line">
                <h3>{props.commentsLength} Comments</h3>
                <div className="comment-form__icon-form-pair">
                    <img src={defaultIcon} className="comment-form__icon" />
                    <section className="comment-form__container--outer">
                        <p>JOIN THE CONVERSATION</p>
                        <form className="comment-form__container--inner">
                            <input
                                className="comment-form__input"
                                name="textbox"
                            ></input>

                            <div className="submit-button__container">
                                <button className="submit-button__button">
                                    ADD A COMMENT
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
