import React, { useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const [currentDialog, setCurrentDialog] = useState(0);

  let dialogsList = props.dialogsPage.messagesData.map((user) => (
    <DialogItem
      key={user.userId}
      userId={user.userId}
      username={user.username}
      setCurrentDialog={setCurrentDialog}
    />
  ));

  let messagesList = props.dialogsPage.messagesData.map((user) => {
    if (user.userId === currentDialog)
      return <Messages key={user.userId} messages={user.messages} />;
  });

  let sendMessage = () => {
    props.sendMessage(currentDialog);
  };

  let onMessageChange = (e) => {
    props.onMessageChange(e.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsList}</div>
      <div>
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
