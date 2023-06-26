import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    // for Fetching Data
    const fetchPosts = () => {
        firestore
            .collection("posts")
            .get()
            .then((snapshot) => {
                const posts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setPosts(posts);
            })
            .catch((error) => {
                console.log("Error fetching posts: ", error);
            });
    };

    // for Delete
    const onDeletePost = (id) => {
        firestore
            .collection("posts")
            .doc(id)
            .delete()
            .then(() => {
                console.log("Deleted Successfully");
                fetchPosts(); // Fetch the updated list of posts after deletion
            })
            .catch((error) => {
                console.log("Error deleting post: ", error);
            });
    };

    // for Edit
    const onEditPost = (postId, newTitle, newSubtitle) => {
        firestore
            .collection("posts")
            .doc(postId)
            .update({
                title: newTitle,
                subTitle: newSubtitle,
                // content: newContent,
            })
            .then(() => {
                console.log("Edit Successfully");
                fetchPosts(); // Fetch the updated list of posts after edit
            })
            .catch((error) => {
                console.log("Error Editing post: ", error);
            });
    };

    return (
        <div className="home">
            <h1>Tech Blog </h1>
            <div id="blog-by">Ankur Rai</div>

            {posts.map((post, index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>

                    <p>{post.subTitle}</p>

                    <div className="action-icons">
                        <img
                            alt="delete"
                            className="delete-btn"
                            src="https://cdn-icons-png.flaticon.com/128/6460/6460112.png"
                            onClick={() => onDeletePost(post.id)}
                        />

                        <img
                            alt="edit"
                            className="edit-btn"
                            src="https://cdn-icons-png.flaticon.com/128/84/84380.png"
                            // onClick={() => onEditPost(post.id)}
                            onClick={() => {
                                const newTitle = prompt("Enter a new title:");
                                const newSubtitle = prompt(
                                    "Enter a new subtitle:"
                                );
                                // const newContent = prompt("Enter new content:");  // Like this we can edit content too
                                if (newTitle && newSubtitle) {
                                    onEditPost(
                                        post.id,
                                        newTitle,
                                        newSubtitle
                                        // newContent
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
