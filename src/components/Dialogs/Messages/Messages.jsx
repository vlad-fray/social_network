import React from "react";

const Messages = (props) => {
  let messageList = props.messages.map((message) => {
    return <div key={message.id}>{message.text}</div>;
  });
  return <div>{messageList}</div>;
};

export default Messages;
