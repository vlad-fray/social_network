import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import {
  updateNewMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReduser";

const Dialogs = (props) => {
  let dialogsList = props.dialogsPage.usernameData.map((user) => (
    <DialogItem id={user.id} username={user.name} />
  ));

  let messagesList = props.dialogsPage.messagesData.map((message) => (
    <Message id={message.id} text={message.text} />
  ));

  let sendMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  let onMessageChange = (e) => {
    props.dispatch(updateNewMessageCreator(e.target.value));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsList}</div>
      <div className={s.messages}>
        {messagesList}
        <textarea
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
          placeholder="Enter your message"
        ></textarea>
        <button onClick={sendMessage}>New post</button>
      </div>
    </div>
  );
};

export default Dialogs;