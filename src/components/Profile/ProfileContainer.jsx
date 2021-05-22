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

class ProfileComponent extends React.Component {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileComponent));
