import React from "react";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../redux/reducers/dialogs-reducer";

const MessageEdit = (props) => {

    let newMessage = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageTextChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div>
            <textarea placeholder="Type your message..." ref={newMessage} onChange={onMessageTextChange}
                      value={props.newMessageText}></textarea>
            <div>
                <button onClick={sendMessage}>Send Message</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default MessageEdit;