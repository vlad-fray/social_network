import React from "react";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postList = props.postData.map((post, id) => (
    <Post key={id} message={post.text} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.myPosts}>
      <p>My posts</p>
      <NewPost
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
      {postList}
    </div>
  );
};

export default MyPosts;
