import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.scss';
import CommentList from '../components/CommentList/CommentList';
import VideoPlayer from '../components/VideoPlayer';
import VideoDescription from '../components/VideoDescription';
import SideBar from '../components/SideBar';
import CommentForm from '../components/CommentList/CommentForm';

import axios from 'axios';

function Home() {
    // console.log(VideosDetails[0]);
    const [featuredVid, setFeaturedVid] = useState([]);
    const [sidebarThumbnails, setSidebar] = useState([]);
    // const [id, setId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');

    const [isVideoLoading, setVideoLoading] = useState(true);
    const [isSidebarLoading, setSidebarLoading] = useState(true);

    // const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
    const baseUrl = 'http://localhost:5555/';
    const defaultId = '84e96018-4022-434e-80bf-000ce4cd12b8';

    //find id
    const { id } = useParams();

    //or set to default id if found id is undefined.

    //for video player
    useEffect(() => {
        const fetchVideo = async (id) => {
            // console.log(id);
            try {
                if (!id) {
                    console.log('ERROR NO ID');
                    //set to default id
                    id = defaultId;
                }
                const targetURL = `${baseUrl}videos/${id}`;

                console.log(targetURL);
                const response = await axios.get(targetURL);
                console.log(response);
                setFeaturedVid(response.data);
                setVideoLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        setVideoLoading(true);

        // console.log(id);
        fetchVideo(id);
    }, [id]);

    //
    useEffect(() => {
        const fetchSidebar = async (id) => {
            console.log(id);
            try {
                // const targetURL = `${baseUrl}videos?api_key=${apiKey}`;
                const targetURL = `${baseUrl}videos`;
                console.log(targetURL);
                const response = await axios.get(targetURL);
                setSidebar(response.data);
                setSidebarLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        setSidebarLoading(true);
        fetchSidebar(id);
    }, []);

    if (isVideoLoading || isSidebarLoading) {
        return (
            <>
                <h1 className="loading">LOADING...</h1>
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
                        videoThumbnails={sidebarThumbnails}
                        id={id}
                        defaultId={defaultId}
                    />
                </main>
            </div>
        </>
    );
}

export default Home;
