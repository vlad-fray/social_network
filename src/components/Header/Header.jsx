import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <img
        src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
        alt="logoIcon"
      />
    </div>
  );
};

export default Header;
