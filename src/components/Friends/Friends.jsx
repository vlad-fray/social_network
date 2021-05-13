import React from "react";

const Friends = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        userId: 0,
        username: "Patrick",
        photoUrl:
          "https://images-na.ssl-images-amazon.com/images/I/619KnxUzpHL._AC_UL1100_.jpg",
        status: "No. it`s Patrik",
        location: { city: "Volgograd", country: "Russia" },
        isFollowed: false,
      },
      {
        userId: 1,
        username: "Vasya",
        photoUrl:
          "https://storage.yandexcloud.net/umn/images/optimized/ca992aa8e5fe447384e8da7591ba1cf7_large.jpg",
        status: "Che po den`gam",
        location: { city: "Volgograd", country: "Russia" },
        isFollowed: false,
      },
      {
        userId: 2,
        username: "Gawr Gura",
        photoUrl:
          "https://i1.sndcdn.com/artworks-GQ1cGtcRqb3OVh0C-z9ogzw-t500x500.jpg",
        status: "A",
        location: { city: "Volgograd", country: "Russia" },
        isFollowed: false,
      },
    ]);
  }
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.userId}>
          <div>
            <div>
              <img src={user.photoUrl} width="40px" />
            </div>
            <div>
              <button onClick={() => props.toggleFollow(user.userId)}>
                {user.isFollowed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
          <div>
            <div>
              <div>{user.username}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
