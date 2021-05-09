import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;
