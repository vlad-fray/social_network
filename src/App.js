import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/friends" render={() => <FriendsContainer />} />
      </div>
    </div>
  );
};

export default App;
