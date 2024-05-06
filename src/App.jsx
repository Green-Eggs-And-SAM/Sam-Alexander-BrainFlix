import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import CommentList from './components/CommentList/CommentList';
import VideoPlayer from './components/VideoPlayer';
import VideoDescription from './components/VideoDescription';
import videoThumbnails from './data/videos.json';
import VideosDetails from './data/video-details.json';
import SideBar from './components/SideBar';
import CommentForm from './components/CommentList/CommentForm';

function App() {
    console.log(VideosDetails[0]);
    const [featuredVid, setFeaturedVid] = useState(VideosDetails[0]);

    const handleClick = (id) => {
        const foundVideo = VideosDetails.find((video) => video.id === id);
        setFeaturedVid(foundVideo);
    };

    return (
        <>
            <div className="app">
                <Header />
                <VideoPlayer data={featuredVid} />
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
                        featuredVidID={featuredVid.id}
                        handleClick={handleClick}
                    />
                </main>
            </div>
        </>
    );
}

export default App;
