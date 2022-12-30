import {setAuthUserData} from "./auth-reducer";

const INITIALIZE = "INITIALIZE";

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return ({
                ...state,
                initialized: true
            });
        default:
            return state;
    }
    ;
};

//action creators
export const initialized = () => ({type: INITIALIZE});

//thunks
export const initialize = () => (dispatch) => {
    let promise = dispatch(setAuthUserData());
    promise.then(() => {
            dispatch(initialized())
        }
    );
};

export default appReducer;
