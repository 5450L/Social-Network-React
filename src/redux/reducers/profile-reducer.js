import {profileAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {message: "My first post", likeCount: 21, id: 1},
        {message: "Introduction", likeCount: 221, id: 2},
        {message: "more", likeCount: 21, id: 3},
    ],
    newPostText: "",
    profile: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likeCount: 0,
                id: state.posts.length + 1,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setProfile = (userId) => (dispatch) => {
    profileAPI.setUserProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;
