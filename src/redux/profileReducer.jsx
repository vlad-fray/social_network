const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 0, text: "Now I`m React developer", likesCount: 1 },
    { id: 1, text: "Hi, guys", likesCount: 2 },
  ],
  newPostText: "",
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
    default:
      return state;
  }
};

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostCreator = (newPostText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: newPostText,
  };
};

export default profileReducer;
