import './App.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Upload from './pages/Upload';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const apiKey = '555a7a2f-c4c3-4999-a818-a910708938e2';
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video-details/:id" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
