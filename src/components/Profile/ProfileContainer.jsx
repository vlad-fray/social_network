import React from "react";
import {
  addPost,
  updateNewPostText,
  setUserProfile,
  toggleIsLoading,
  setMyId,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import loading from "../../assets/images/loading.svg";
import { withRouter } from "react-router";
import { usersAPI } from "../../api/api";

class ProfileComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 2;
    usersAPI
      .getUserProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
      })
      .then(this.props.toggleIsLoading(false));
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
  setUserProfile,
  toggleIsLoading,
  setMyId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileComponent));
