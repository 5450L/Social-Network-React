import {connect} from "react-redux";
import {
    follow, getUsers,
    toggleFollowing,
    unfollow,
} from "../../redux/reducers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../shared/Preloader.component/Preloader";
import {withAuthRedirectComponent} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
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

export default compose(
    connect(MapStateToProps, {
        toggleFollowing,
        follow,
        unfollow,
        getUsers
    }),
    withAuthRedirectComponent)(UsersContainer);

