import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    props.updateNewPostText(e.target.value);
  };

  return (
    <div className={s.newPost}>
      <textarea
        onChange={onPostChange}
        value={props.newPostText}
        placeholder="Enter your message"
      ></textarea>
      <button onClick={addPost}>New post</button>
    </div>
  );
};

export default NewPost;
