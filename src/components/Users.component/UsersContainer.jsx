import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching, toggleFollowing,
    unfollow,
} from "../../redux/reducers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../shared/Preloader.component/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleFetching();
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toggleFetching();
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader/>
                ) : (
                    <Users
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        toggleFollowing={this.props.toggleFollowing}
                        followingInProgress={this.props.followingInProgress}
                    />
                )}
            </>
        );
    }
}

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default UsersContainer = connect(MapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowing,
    follow,
    unfollow,
})(UsersContainer);
