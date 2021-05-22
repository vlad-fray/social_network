import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  return (
    <div>
      <div>{`Total users count: ${props.totalUsersCount}`}</div>
      <div>{`Current page: ${props.currentPage}`}</div>
      <div className={s.pages}>
        {props.pages.map((pageNumber) => {
          return (
            <div
              className={props.currentPage === pageNumber ? s.currentPage : ""}
              key={pageNumber}
              onClick={(e) => {
                props.onPageChanged(pageNumber);
              }}
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
      <div className={s.usersList}>
        {props.users.map((user) => (
          <div key={user.id} className={s.user}>
            <div>
              <div>
                <NavLink to={`/profile/` + user.id}>
                  {user.photos.small ? (
                    <img src={user.photos.small} alt="avatar" width="40px" />
                  ) : (
                    <img src={userPhoto} alt="avatar" width="40px" />
                  )}
                </NavLink>
              </div>
              <div>
                <button
                  disabled={props.isFollowingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleIsFollowing(true, user.id);
                    if (!user.followed) {
                      usersAPI.setIsFollowed(user.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.toggleFollow(user.id);
                        }
                        props.toggleIsFollowing(false, user.id);
                      });
                    } else {
                      usersAPI.setIsUnFollowed(user.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.toggleFollow(user.id);
                        }
                        props.toggleIsFollowing(false, user.id);
                      });
                    }
                  }}
                >
                  {user.followed ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
            <div>
              <div>{user.name}</div>
              <div>
                {user.status
                  ? user.status.length > 13
                    ? `${user.status.substr(0, 12) + "..."}`
                    : user.status
                  : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
