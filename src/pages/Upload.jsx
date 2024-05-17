import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Upload.scss';
import defaulThumbnail from '../assets/images/Upload-video-preview.jpg';
import publishImg from '../assets/icons/publish.svg';
import axios from 'axios';

function Upload() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [titleValid, setTitleValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);
    const baseUrl = 'http://localhost:5555/';

    const postVideo = async (newTitle, newDescription) => {
        try {
            const targetURL = `${baseUrl}upload`;
            const defaultThumbnail =
                'http://localhost:5555/images/imageUpload.jpg';

            const newVideo = {
                title: newTitle,
                description: newDescription,
                image: defaultThumbnail,
            };

            const response = axios.post(targetURL, newVideo);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            const defaultThumbnail =
                'http://localhost:5555/images/imageUpload.jpg';

            await postVideo(title, description, defaultThumbnail);
            alert('Your video is uploading');
            navigate('/');
        }
    };

    return (
        <article className="upload">
            <h1>UPLOAD PAGE</h1>
            <div className="divider hide-divider"></div>
            <section>
                <div className="upload__main-container ">
                    <div className="upload__thumbnail--container  margin-top-gutter margin-right-gutter">
                        <h5 className="upload__subheader">VIDEO THUMBNAIL</h5>
                        <img
                            className="upload__thumbnail"
                            src={defaulThumbnail}
                        ></img>
                    </div>
                    <form ref={formRef} className="upload__form">
                        <div className=" margin-top-gutter">
                            <label className="upload__subheader">
                                TITLE YOUR VIDEO:{' '}
                                <input
                                    type="text"
                                    name="title"
                                    className={`${
                                        titleValid ? '' : 'upload__empty'
                                    }`}
                                    placeholder="Add a title to your video"
                                />
                            </label>
                        </div>
                        <div className="input-tall margin-top-gutter">
                            <label className="upload__subheader ">
                                ADD A VIDEO DESCRIPTION:{' '}
                                <textarea
                                    type="text"
                                    name="description"
                                    className={`input-tall ${
                                        descriptionValid ? '' : 'upload__empty'
                                    }`}
                                    placeholder="Add a description to your video"
                                />
                            </label>
                        </div>
                    </form>
                </div>
                <div className="divider hide-divider margin-top-gutter__large"></div>
                <div className="upload__button-pair-conatiner margin-top-gutter__large">
                    <div className="button__container button__width margin-top-gutter">
                        <button type="button" onClick={handleSubmit}>
                            PUBLISH
                        </button>
                        <img
                            src={publishImg}
                            className="header__upload--icon"
                            alt=""
                        />
                    </div>
                    <Link to={`/`} className="button__width margin-top-gutter">
                        <button className="button__inverted">CANCEL</button>
                    </Link>
                </div>
            </section>
        </article>
    );
}

export default Upload;
