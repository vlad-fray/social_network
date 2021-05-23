import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
  let mapStateRedirectToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  let ConnectedAuthRedirectComponent = connect(mapStateRedirectToProps)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
