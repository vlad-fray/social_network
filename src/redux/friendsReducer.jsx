import { act } from "react-dom/test-utils";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    // {
    //   userId: 0,
    //   username: "Patrick",
    //   photoUrl:
    //     "https://images-na.ssl-images-amazon.com/images/I/619KnxUzpHL._AC_UL1100_.jpg",
    //   status: "No. it`s Patrik",
    //   location: { city: "Volgograd", country: "Russia" },
    //   isFollowed: false,
    // },
    // {
    //   userId: 1,
    //   username: "Vasya",
    //   photoUrl:
    //     "https://storage.yandexcloud.net/umn/images/optimized/ca992aa8e5fe447384e8da7591ba1cf7_large.jpg",
    //   status: "Che po den`gam",
    //   location: { city: "Volgograd", country: "Russia" },
    //   isFollowed: false,
    // },
    // {
    //   userId: 2,
    //   username: "Gawr Gura",
    //   photoUrl:
    //     "https://i1.sndcdn.com/artworks-GQ1cGtcRqb3OVh0C-z9ogzw-t500x500.jpg",
    //   status: "A",
    //   location: { city: "Volgograd", country: "Russia" },
    //   isFollowed: false,
    // },
  ],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE-FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userId === action.userId) {
            return { ...user, isFollowed: !user.isFollowed };
          } else return user;
        }),
      };
    case "SET-USERS":
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const toggleFollowCreator = (userId) => ({
  type: TOGGLE_FOLLOW,
  userId,
});

export const setUsersCreator = (users) => ({ type: SET_USERS, users });

export default friendsReducer;
