const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, newMessage: text});

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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: action.newMessage,
                id: (state.messages.length + 1)
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

        default:
            return state;
    }

};

export default dialogsReducer;
