const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id: (state.messages.length + 1)
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };

        default:
            return state;
    }

}

export default dialogsReducer;
