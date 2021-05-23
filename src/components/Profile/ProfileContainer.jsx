import React from "react";
import {
  addPost,
  updateNewPostText,
  getProfile,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import loading from "../../assets/images/loading.svg";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }
  render() {
    return (
      <>
        {this.props.profilePage.profile ? (
          <Profile {...this.props} />
        ) : (
          <img src={loading} alt="loading" />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = {
  updateNewPostText,
  addPost,
  getProfile,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
