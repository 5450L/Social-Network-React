import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {message: 'My first post', likeCount: 21, id: 1},
                {message: 'Introduction', likeCount: 221, id: 2},
                {message: 'more', likeCount: 21, id: 3}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {name: 'Dima', id: 1},
                {name: 'Stepa', id: 2},
                {name: 'Fedor', id: 3},
                {name: 'Grigoriy', id: 4}
            ],
            messages: [
                {message: 'Hello', id: 1},
                {message: 'Hi', id: 2},
                {message: 'Message', id: 3},
                {message: 'Whats up', id: 4}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('rerenderer works')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;