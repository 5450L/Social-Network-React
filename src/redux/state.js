const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

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
        }
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
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    message: this._state.profilePage.newPostText,
                    likeCount: 0,
                    id: (this._state.profilePage.posts.length + 1)
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(store);
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                console.log(this._state.profilePage.newPostText);
                this._callSubscriber(store);
            case SEND_MESSAGE:
                let newMessage = {
                    message: this._state.dialogsPage.newMessageText,
                    id: (this._state.dialogsPage.messages.length + 1)
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(store);
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber(store);

        }
    }

}

export default store;
window.store = store;