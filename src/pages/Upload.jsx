import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Upload.scss';
import defaulThumbnail from '../assets/images/Upload-video-preview.jpg';
import publishImg from '../assets/icons/publish.svg';

function Upload() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [titleValid, setTitleValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);
    // const confirmdescriptionRef = useRef(null);

    const handleSubmit = () => {
        // TO DO: Get the DOM object using form ref
        const form = formRef.current;

        const title = form.title.value;
        const description = form.description.value;
        console.log(title);
        console.log(description);

        let returnTrigger = false;
        if (!title) {
            setTitleValid(false);
            returnTrigger = true;
        } else {
            setTitleValid(true);
        }

        if (!description) {
            setDescriptionValid(false);
            returnTrigger = true;
        } else {
            setDescriptionValid(true);
        }

        if (returnTrigger) {
            alert('Title and Description must be filled out.');
            return;
        } else {
            alert('Your video is uploading');
            navigate('/');
        }
    };

    return (
        <article className="upload">
            <h1>UPLOAD PAGE</h1>
            <section>
                <div className="upload__main-container">
                    <div className="upload__thumbnail-container">
                        <h5 className="upload__subheader">VIDEO THUMBNAIL</h5>
                        <img
                            className="upload__thumbnail"
                            src={defaulThumbnail}
                        ></img>
                    </div>
                    <form ref={formRef} className="upload__form">
                        <label className="upload__subheader">
                            TITLE YOUR VIDEO:{' '}
                            <input
                                type="text"
                                name="title"
                                className={`${
                                    titleValid ? '' : 'upload__empty'
                                }`}
                            />
                        </label>
                        <label className="upload__subheader">
                            ADD A VIDEO DESCRIPTION:{' '}
                            <input
                                type="text"
                                name="description"
                                className={`${
                                    descriptionValid ? '' : 'upload__empty'
                                }`}
                            />
                        </label>
                    </form>
                </div>
                <div className="divider hide-divider"></div>
                <div className="upload__button-pair-conatiner">
                    <div className="button__container button__width">
                        <button type="button" onClick={handleSubmit}>
                            PUBLISH
                        </button>
                        <img
                            src={publishImg}
                            className="header__upload--icon"
                            alt=""
                        />
                    </div>
                    <Link to={`/`} className="button__width">
                        <button className="button__inverted">CANCEL</button>
                    </Link>
                </div>
            </section>
        </article>
    );
}

export default Upload;
