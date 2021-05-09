import React from "react";
import s from "./Post.module.css";

const MyPost = (props) => {
  return (
    <div className={s.myPost}>
      <img
        src="https://n1s1.hsmedia.ru/b8/82/5d/b8825d119b96cd6195f937b40cee77b4/620x429_1_5a99f0bf75b4d863cc9ccf9f79ede1a3@1200x831_0xac120003_19189325441604046771.jpg"
        alt="postImg"
      />
      <span>{props.message}</span>
      <p>
        {props.likesCount} {props.likesCount === "1" ? "like" : "likes"}
      </p>
    </div>
  );
};

export default MyPost;
