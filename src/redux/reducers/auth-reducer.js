import {authAPI} from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
    ;
};


export const setAuthUserDataSuccess = (userId, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login}
});

export const setAuthUserData = () => (dispatch) => {
    authAPI.auth()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataSuccess(id, email, login));
            }
        });
};

export default authReducer;
