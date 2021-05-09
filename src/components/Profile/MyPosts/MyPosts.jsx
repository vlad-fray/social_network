import React from "react";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postList = props.profilePage.postData.map((post) => (
    <Post message={post.text} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.myPosts}>
      <p>My posts</p>
      <NewPost
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
      {postList}
    </div>
  );
};

export default MyPosts;
