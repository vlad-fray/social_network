import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <NavLink
        className={s.navLink}
        activeClassName={s.activeLink}
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={s.navLink}
        activeClassName={s.activeLink}
        to="/dialogs"
      >
        Messages
      </NavLink>
      <NavLink className={s.navLink} to="#">
        News
      </NavLink>
      <NavLink className={s.navLink} to="/friends">
        Friends
      </NavLink>
      <NavLink className={s.navLink} to="#">
        Settings
      </NavLink>
    </div>
  );
};

export default Navbar;
