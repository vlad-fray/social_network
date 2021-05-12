const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    { id: 0, text: "Hi" },
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Great!" },
    { id: 4, text: "Great!" },
  ],
  usernameData: [
    { id: 0, name: "Dima" },
    { id: 1, name: "Vasya" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Alina" },
  ],
  newMessageText: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      let newMessage = {
        id: state.messagesData.length,
        text: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageCreator = (newMessageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: newMessageText,
  };
};

export default dialogsReducer;
