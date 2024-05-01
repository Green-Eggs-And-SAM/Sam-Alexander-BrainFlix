import './App.scss';
import Header from './components/Header';
import CommentList from './components/CommentList';
import CommentData from './data/video-details.json';

function App() {
    console.log(CommentData[1].comments);
    return (
        <>
            <Header />
            <CommentList comments={CommentData[2].comments} />
        </>
    );
}

export default App;
