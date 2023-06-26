// import Home from "./Home";
// import Navbar from "./Navbar";
// import CreatePost from "./CreatePost";
// import PostDetail from "./PostDetail";

import { Routes, Route } from "react-router-dom";
import { Home, Navbar, CreatePost, PostDetail } from "./";
function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/post/:postId" element={<PostDetail />} />
                <Route exact path="/create-post" element={<CreatePost />} />
            </Routes>
        </div>
    );
}

export default App;
