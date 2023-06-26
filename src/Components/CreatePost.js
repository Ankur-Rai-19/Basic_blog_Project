import React, { useState } from "react";
import { firestore } from "../firebase";
import { useFormInput } from "../hooks";

function CreatePost() {
    // Here we uses a CustomHook function (useFormInput)
    const title = useFormInput("");
    const subTitle = useFormInput("");
    const content = useFormInput("");

    function handleSubmit(e) {
        //when form is submitted the page doest not get automatically reloads. thats why we use this
        e.preventDefault();

        // Printing data to the console
        console.log("Title", title);
        console.log("SubTitle", subTitle);
        console.log("Content", content);

        // Adding data to the firebase db
        firestore
            .collection("posts")
            .add({
                title: title.value,
                subTitle: subTitle.value,
                content: content.value,
                createdAt: new Date(),
            })
            .then(() => {
                // Reload the page after successfully adding the post
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error adding post: ", error);
            });
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title : </label>
                    {/*this is the short way  */}
                    <input {...title} />

                    {/* Below method is long way and both are correct */}
                    {/* <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /> */}
                </div>

                <div className="form-field">
                    <label>Sub Title : </label>
                    <input {...subTitle} />
                </div>

                <div className="form-field">
                    <label>Content : </label>
                    <textarea {...content}></textarea>
                </div>

                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
