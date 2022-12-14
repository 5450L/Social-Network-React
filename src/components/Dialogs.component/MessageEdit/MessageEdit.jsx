import React from "react";
const MessageEdit = (props) => {

    let newMessage = React.createRef();
    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageTextChange = () => {
        let text = newMessage.current.value;
        props.messageTextChange(text);
    }

    return (
        <div>
            <textarea placeholder="Type your message..." ref={newMessage} onChange={onMessageTextChange}
                      value={props.newMessageText}></textarea>
            <div>
                <button onClick={onSendMessage}>Send Message</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default MessageEdit;