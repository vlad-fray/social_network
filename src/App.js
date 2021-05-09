import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogsPage={props.store.getState().dialogsPage}
              dispatch={props.store.dispatch}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => <Profile store={props.store} />}
        />
      </div>
    </div>
  );
};

export default App;
