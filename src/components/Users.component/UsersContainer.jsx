import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response.data.totalCount);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return (
            <div>
                <Users onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage} pageSize={this.props.pageSize} users={this.props.users}/>
            </div>
        )
    };
};

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
let MapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        }
    }
};


export default UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersContainer);