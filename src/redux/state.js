let store = {
    _state: {

        profilePage: {
            posts: [
                {message: 'My first post', likeCount: 21, id: 1},
                {message: 'Introduction', likeCount: 221, id: 2},
                {message: 'more', likeCount: 21, id: 3}
            ],
            newPostText: 'type your text'
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
            ]
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

    /*   addPost() {
           let newPost = {
               message: this._state.profilePage.newPostText,
               likeCount: 0,
               id: (this._state.profilePage.posts.length + 1)
           }
           this._state.profilePage.posts.push(newPost);
           this._callSubscriber(store);
           this.postTextChange('');
       },
       postTextChange(newPostText) {
           this._state.profilePage.newPostText = newPostText;
           this._callSubscriber(store);
       },*/

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    message: this._state.profilePage.newPostText,
                    likeCount: 0,
                    id: (this._state.profilePage.posts.length + 1)
                }
                this._state.profilePage.posts.push(newPost);
                this._callSubscriber(store);
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.payload.newPostText;
                this._callSubscriber(store);

        }
    }

}

export default store;
window.store = store;