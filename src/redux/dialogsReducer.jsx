const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    {
      userId: 0,
      username: "Dima",
      messages: [
        { id: 0, text: "Hi" },
        { id: 1, text: "Hello" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "Great!" },
        { id: 4, text: "Great!" },
      ],
    },
    { userId: 1, username: "Vasya", messages: [] },
    { userId: 2, username: "Anton", messages: [] },
    { userId: 3, username: "Alina", messages: [] },
  ],
  newMessageText: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      for (let userId = 0; userId < state.messagesData.length; userId++) {
        if (userId === action.userId && state.newMessageText) {
          return {
            ...state,
            messagesData: state.messagesData.map((user) => {
              if (user.userId === action.userId) {
                return {
                  ...user,
                  messages: [
                    ...user.messages,
                    {
                      id: state.messagesData[action.userId].messages.length,
                      text: state.newMessageText,
                    },
                  ],
                };
              } else return user;
            }),
            newMessageText: "",
          };
        }
      }
      return state;
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      return {
        ...state,
        newMessageText: action.text,
      };
    }
    default:
      return state;
  }
};

//Action creators
export const sendMessage = (userId) => {
  return {
    type: SEND_MESSAGE,
    userId: userId,
  };
};
export const onMessageChange = (newMessageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: newMessageText,
  };
};

export default dialogsReducer;
