import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";

let MapStateToProps = (state) => {
    return {users: state.usersPage.users}
};
let MapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        }
    }
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;