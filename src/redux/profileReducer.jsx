import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_LOADING_STATE = "TOGGLE-LOADING-STATE";
const SET_MY_ID = "SET-MY-ID";

let initialState = {
  postData: [
    { id: 0, text: "Now I`m React developer", likesCount: 1 },
    { id: 1, text: "Hi, guys", likesCount: 2 },
  ],
  newPostText: "",
  profile: null,
  myId: null,
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData.length,
            text: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: "",
      };
    }
    case "UPDATE-NEW-POST-TEXT": {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case "SET-USER-PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "TOGGLE-LOADING-STATE":
      return { ...state, isLoading: action.isLoading };
    case "SET-MY-ID":
      return { ...state, id: action.id };
    default:
      return state;
  }
};

//Action creators
export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostText = (newPostText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: newPostText,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_LOADING_STATE,
  isLoading,
});
export const setMyId = (id) => ({
  type: SET_MY_ID,
  id,
});

//Thunk creators
export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    userId = userId ? userId : 17110;
    usersAPI
      .getUserProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data));
      })
      .then(dispatch(toggleIsLoading(false)));
  };
};

export default profileReducer;
