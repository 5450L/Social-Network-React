import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

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

            };
        default:
            return state;
    }
    ;
};

export const setAuthUserDataSuccess = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
});

//thunks
export const setAuthUserData = () => (dispatch) => {
   return authAPI.auth()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataSuccess(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    console.log(email, password, rememberMe);
    authAPI.login(email, password, rememberMe).then(response => {
        console.log(response);
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error occured';
            dispatch(stopSubmit('login', {_error: message}));
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        dispatch(setAuthUserDataSuccess(null, null, null, false));
    });
};

export default authReducer;
