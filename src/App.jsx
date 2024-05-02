import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import CommentList from './components/CommentList/CommentList';
import VideoPlayer from './components/VideoPlayer';
import videoThumbnails from './data/videos.json';
import VideosDetails from './data/video-details.json';
import SideBar from './components/SideBar';

function App() {
    // console.log(Videos[0]);
    // const featuredVid = Videos[0];

    console.log(VideosDetails[0]);
    // const featuredVid = VideosDetails[0];
    const [featuredVid, setFeaturedVid] = useState(VideosDetails[0]);

    // const setFeaturedVid(){

    // }
    const handleClick = (id) => {
        //
        const foundVideo = VideosDetails.find((video) => video.id === id);
        setFeaturedVid(foundVideo);
    };

    return (
        <>
            <Header />
            <VideoPlayer data={featuredVid} />
            <CommentList comments={featuredVid.comments} />
            <SideBar
                videoThumbnails={videoThumbnails}
                featuredVidID={featuredVid.id}
                handleClick={handleClick}
            />
        </>
    );
}

export default App;
