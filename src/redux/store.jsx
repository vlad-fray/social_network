import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";

export let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 0, text: "Now I`m React developer", likesCount: 1 },
        { id: 1, text: "Hi, guys", likesCount: 2 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },

  _subscriber() {
    console.log("no subs");
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  _callSubscriber() {
    this._subscriber();
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};
