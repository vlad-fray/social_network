import React from "react";
import s from "./NewPost.module.css";
import {
  addPostCreator,
  updateNewPostCreator,
} from "../../../redux/profileReduser";

const NewPost = (props) => {
  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = (e) => {
    props.dispatch(updateNewPostCreator(e.target.value));
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
