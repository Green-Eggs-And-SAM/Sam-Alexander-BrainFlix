import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    // const confirmdescriptionRef = useRef(null);

    const handleSubmit = () => {
        // TO DO: Get the DOM object using form ref
        const form = formRef.current;

        const title = form.title.value;
        const description = form.description.value;
        console.log(title);
        console.log(description);
        // TO DO: Add logic to check all fields filled
        if (!title) {
            alert('You must fill out the title');
            return;
        } else if (!description) {
            alert('You must fill out the desciption');
            return;
        }
        // This is where we would make an axios request
        // to our backend to add the user to our database.
        alert('Your video is uploading');
        navigate('/');
    };

    return (
        <>
            <h1>UPLOAD PAGE</h1>
            <form ref={formRef}>
                <label>
                    TITLE YOUR VIDEO: <input type="text" name="title" />
                </label>
                <label>
                    ADD A VIDEO DESCRIPTION:{' '}
                    <input type="text" name="description" />
                </label>

                <button type="button" onClick={handleSubmit}>
                    PUBLISH
                </button>
            </form>
        </>
    );
}

export default Upload;
