import {usersAPI} from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_FETCHING:
            return {...state, isFetching: !state.isFetching};
        case TOGGLE_FOLLOWING:
            if (state.followingInProgress.some(id => id == action.userId)) {
                return {
                    ...state, followingInProgress: [...state.followingInProgress.filter(id => id !== action.userId)]
                };
            }
            ;
            return {...state, followingInProgress: [...state.followingInProgress, action.userId]}

        case
        FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            };
        case
        UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        default:
            return state;
    }
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const toggleFetching = () => ({type: TOGGLE_FETCHING});
export const toggleFollowing = (userId) => ({type: TOGGLE_FOLLOWING, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching());
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleFetching());
        });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                ;
                dispatch(toggleFollowing(userId));
            });
    };
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                ;
                dispatch(toggleFollowing(userId));
            });
    };
};

export default usersReducer;
