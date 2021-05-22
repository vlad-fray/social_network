import axios from "axios";
import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReduser";
import { connect } from "react-redux";

class HeaderComponent extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (!response.data.resultCode) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = {
  setAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
