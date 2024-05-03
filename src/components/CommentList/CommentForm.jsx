import defaultIcon from '../../assets/images/Mohan-muruge.jpg';
import './CommentForm.scss';

function CommentForm(props) {
    return (
        <>
            <section className="comment-form">
                <h3>{props.commentsLength} Comments</h3>
                <img src={defaultIcon} className="comment-form__icon" />
                <p>JOIN THE CONVERSATION</p>
                <form className="comment-form__container">
                    <div>
                        <input
                            className="comment-form__input"
                            name="textbox"
                        ></input>
                        <button className="comment-form__button">
                            ADD A COMMENT
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default CommentForm;
