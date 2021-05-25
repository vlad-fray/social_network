import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.userInfo}>
        <img
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
          alt='Avatar'
          width='200px'
        />
        <div>{`My name is ${props.profile.fullName}`}</div>
        <ProfileStatus status={"Hi"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
