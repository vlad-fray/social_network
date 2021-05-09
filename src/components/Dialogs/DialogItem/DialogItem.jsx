import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>
        {props.username}
      </NavLink>
    </div>
  );
};

export default DialogItem;
