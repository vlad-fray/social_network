import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/userPhoto.png";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <img
        className={s.profileImg}
        src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="headerImg"
      />
      <div className={s.userInfo}>
        <img
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
          alt="Avatar"
          width="200px"
        />
        <div>{`My name is ${props.profile.fullName}`}</div>
        <div>
          {props.profile.aboutMe && `About me: ${props.profile.aboutMe}`}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
