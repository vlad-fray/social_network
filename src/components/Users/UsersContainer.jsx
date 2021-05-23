import React from "react";
import Users from "./Users";
import loadingImg from "../../assets/images/loading.svg";
import s from "./Users.module.css";
import { connect } from "react-redux";
import { getUsers, follow, unfollow } from "../../redux/usersReducer";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
      <>
        {this.props.isLoading ? (
          <div className={s.preloadImg}>
            <img src={loadingImg} alt="loading..." />
          </div>
        ) : (
          <Users
            pages={pages}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            isFollowingInProgress={this.props.isFollowingInProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
  };
};

let mapDispatchToProps = {
  getUsers,
  follow,
  unfollow,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);
