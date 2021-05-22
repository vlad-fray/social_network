import { usersAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

//Action creators
export const setAuthUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, data: { userId, email, login } };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    usersAPI.getAuthUserData().then((data) => {
      if (!data.resultCode) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  };
};

export default authReducer;
