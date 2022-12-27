import {profileAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts: [
        {message: "My first post", likeCount: 21, id: 1},
        {message: "Introduction", likeCount: 221, id: 2},
        {message: "more", likeCount: 21, id: 3},
    ],
    newPostText: "",
    profile: null,
    status: 'Some Status'
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.newPost,
                likeCount: 0,
                id: state.posts.length + 1,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};
//Action ctreators
export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
});

//thunks
export const setProfile = (userId) => (dispatch) => {
    profileAPI.setUserProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
};
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};


export default profileReducer;
