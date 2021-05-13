import { connect } from "react-redux";
import Friends from "./Friends";
import {
  toggleFollowCreator,
  setUsersCreator,
} from "../../redux/friendsReducer";

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
