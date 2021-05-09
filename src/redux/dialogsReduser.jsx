const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      let newMessage = {
        id: state.messagesData.length,
        text: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      break;
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      state.newMessageText = action.text;
      break;
    }
    default:
      break;
  }
  return state;
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
