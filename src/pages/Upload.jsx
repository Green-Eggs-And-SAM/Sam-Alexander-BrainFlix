import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.scss';

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

        if (!title) {
            alert('You must fill out the title');
            setTitleValid(false);
            return;
        } else {
            setTitleValid(true);
        }

        if (!description) {
            alert('You must fill out the desciption');
            setDescriptionValid(false);
            return;
        } else {
            setDescriptionValid(true);
        }
        alert('Your video is uploading');
        navigate('/');
    };

    return (
        <>
            <h1>UPLOAD PAGE</h1>
            <form ref={formRef}>
                <label>
                    TITLE YOUR VIDEO:{' '}
                    <input
                        type="text"
                        name="title"
                        className={`${titleValid ? '' : 'upload__empty'}`}
                    />
                </label>
                <label>
                    ADD A VIDEO DESCRIPTION:{' '}
                    <input
                        type="text"
                        name="description"
                        className={`${descriptionValid ? '' : 'upload__empty'}`}
                    />
                </label>

                <button type="button" onClick={handleSubmit}>
                    PUBLISH
                </button>
            </form>
        </>
    );
}

export default Upload;
