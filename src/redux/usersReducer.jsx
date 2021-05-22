import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TOGGLE_LOADING_STATE = "TOGGLE-LOADING-STATE";
const TOGGLE_FOLLOWING_STATE = "TOGGLE-FOLLOWING-STATE";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: null,
  currentPage: 1,
  isLoading: false,
  isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE-FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: !user.followed };
          } else return user;
        }),
      };
    case "SET-USERS":
      return { ...state, users: action.users };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.pageNumber };
    case "SET-USERS-COUNT":
      return { ...state, totalUsersCount: action.count };
    case "TOGGLE-LOADING-STATE":
      return { ...state, isLoading: action.isLoading };
    case "TOGGLE-FOLLOWING-STATE":
      console.log(state.isFollowingInProgress);
      return {
        ...state,
        isFollowingInProgress: action.isFollowingInProgress
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// Action creators
export const toggleFollow = (id) => ({
  type: TOGGLE_FOLLOW,
  id,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setUsersCount = (count) => ({
  type: SET_USERS_COUNT,
  count,
});
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_LOADING_STATE,
  isLoading,
});
export const toggleIsFollowing = (isFollowingInProgress, userId) => ({
  type: TOGGLE_FOLLOWING_STATE,
  isFollowingInProgress,
  userId,
});

//Thunk creators
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
      dispatch(toggleIsLoading(false));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.setIsFollowed(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.setIsUnFollowed(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};

export default usersReducer;
