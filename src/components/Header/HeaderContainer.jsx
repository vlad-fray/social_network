import React from "react";
import Header from "./Header";
import { getAuthUserData } from "../../redux/authReduser";
import { connect } from "react-redux";

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
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
  getAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
