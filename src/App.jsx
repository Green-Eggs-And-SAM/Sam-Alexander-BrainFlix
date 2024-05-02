import './App.scss';
import Header from './components/Header';
import CommentList from './components/CommentList';
import VideoPlayer from './components/VideoPlayer';
import Videos from './data/videos.json';
import VideosDetails from './data/video-details.json';
import SideBar from './components/SideBar';

function App() {
    // console.log(Videos[0]);
    // const featuredVid = Videos[0];
    console.log(VideosDetails[0]);
    const featuredVid = VideosDetails[0];
    return (
        <>
            <Header />
            <VideoPlayer data={featuredVid} />
            <CommentList comments={featuredVid.comments} />
            <SideBar />
        </>
    );
}

export default App;
