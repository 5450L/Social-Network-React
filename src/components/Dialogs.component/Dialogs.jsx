import React from 'react';
import dialogsStyles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import editPostStyles from "../Content.component/Posts/EditPost.component/EditPost.module.css";

const Dialogs = (props) => {


    let newMessage = React.createRef();
    let onSend = () => {
        let text = newMessage.current.value;
        newMessage.current.value = null;
        alert(text);
    }


    let dialogsTemplateArray = props.dialogsData.dialogs.map(dialog => <DialogsItem name={dialog.name}
                                                                                    id={dialog.id}/>);
    let messagesTemplateArray = props.dialogsData.messages.map(message => <Message message={message.message}
                                                                                   id={message.id}/>);

    return (
        <div className={dialogsStyles.dialogs}>

            <div className={dialogsStyles.dialogsItems}>
                {dialogsTemplateArray}
            </div>

            <div className={dialogsStyles.messagesArea}>
                <div className={dialogsStyles.messages}>
                    {messagesTemplateArray}
                </div>

                <div className={dialogsStyles.newMessage}>
                    <textarea placeholder="Type your message..." ref={newMessage}></textarea>

                    <div className={editPostStyles.messageButtons}>
                        <button onClick={onSend}>Send</button>
                        <button>Cancel</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dialogs;