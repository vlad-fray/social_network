import React from "react";
import Users from "./Users";
import loadingImg from "../../assets/images/loading.svg";
import s from "./Users.module.css";
import { connect } from "react-redux";
import {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsLoading,
  toggleIsFollowing,
} from "../../redux/usersReducer";
import { usersAPI } from "../../api/api";

class UsersComponent extends React.Component {
  componentDidMount() {
    if (!this.props.users[0]) {
      this.props.toggleIsLoading(true);
      usersAPI
        .getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.setUsers(data.items);
          this.props.setUsersCount(data.totalCount);
          this.props.toggleIsLoading(false);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsLoading(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsLoading(false);
      });
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
            toggleFollow={this.props.toggleFollow}
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            toggleIsFollowing={this.props.toggleIsFollowing}
            isFollowingInProgress={this.props.isFollowingInProgress}
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
  toggleFollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsLoading,
  toggleIsFollowing,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
