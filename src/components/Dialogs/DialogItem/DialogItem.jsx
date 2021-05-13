import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink
        onClick={() => props.setCurrentDialog(props.userId)}
        to={`/dialogs/${props.userId}`}
      >
        {props.username}
      </NavLink>
    </div>
  );
};

export default DialogItem;
