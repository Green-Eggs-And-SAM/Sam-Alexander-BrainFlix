import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.scss';
import CommentList from '../components/CommentList/CommentList';
import VideoPlayer from '../components/VideoPlayer';
import VideoDescription from '../components/VideoDescription';
import videoThumbnails from '../data/videos.json';
import VideosDetails from '../data/video-details.json';
import SideBar from '../components/SideBar';
import CommentForm from '../components/CommentList/CommentForm';

import axios from 'axios';

function Home() {
    // console.log(VideosDetails[0]);
    const [featuredVid, setFeaturedVid] = useState([]);

    const [isLoading, setLoading] = useState(true);

    const apiKey = '555a7a2f-c4c3-4999-a818-a910708938e2';
    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';

    // const featuredVid = thumbnailAPI.getVideo(
    //     '84e96018-4022-434e-80bf-000ce4cd12b8'
    // );
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchVideo = async (id) => {
            console.log(id);
            try {
                if (!id) {
                    console.log('ERROR NO ID');
                    //set to default id
                    id = '84e96018-4022-434e-80bf-000ce4cd12b8';
                }
                console.log(id);
                const targetURL = `${baseUrl}videos/${id}?api_key=${apiKey}`;
                console.log(targetURL);
                const response = await axios.get(targetURL);

                setLoading(false);
                setFeaturedVid(response.data);

                console.log(featuredVid);
            } catch (error) {
                console.log(error);
            }
        };
        setLoading(true);

        console.log(id);
        fetchVideo(id);
    }, [id]);

    // console.log(featuredVid);
    // const handleClick = (id) => {
    //     const foundVideo = VideosDetails.find((video) => video.id === id);
    //     setFeaturedVid(foundVideo);
    // };

    if (isLoading) {
        return (
            <>
                <h1>LOADING...</h1>
            </>
        );
    }
    return (
        <>
            <div className="app">
                <VideoPlayer featuredVid={featuredVid} />
                <main>
                    <article className="description-comments">
                        <VideoDescription data={featuredVid} />
                        <CommentForm
                            commentsLength={featuredVid.comments.length}
                        />
                        <CommentList comments={featuredVid.comments} />
                    </article>
                    <SideBar
                        videoThumbnails={videoThumbnails}
                        id={featuredVid.id}
                        apiKey={apiKey}
                    />
                </main>
            </div>
        </>
    );
}

export default Home;
