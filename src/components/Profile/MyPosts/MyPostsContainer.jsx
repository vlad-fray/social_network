import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostCreator,
  updateNewPostCreator,
} from "../../../redux/profileReduser";

const MyPostsContainer = (props) => {
  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostCreator(text));
  };
  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };
  return (
    <MyPosts
      profilePage={props.store.getState().profilePage}
      updateNewPostText={updateNewPostText}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
