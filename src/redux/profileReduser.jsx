const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: state.postData.length,
        text: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      break;
    }
    case "UPDATE-NEW-POST-TEXT": {
      state.newPostText = action.text;
      break;
    }
    default:
      break;
  }
  console.log(state);
  return state;
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
