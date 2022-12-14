import React from 'react';
import dialogsStyles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import editPostStyles from "../Content.component/Posts/EditPost.component/EditPost.module.css";
import MessageEdit from "./MessageEdit/MessageEdit";

const Dialogs = (props) => {

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

                <MessageEdit newMessageText={props.dialogsData.newMessageText} dispatch={props.dispatch}/>

                <div className={dialogsStyles.messages}>
                    {messagesTemplateArray}
                </div>
            </div>

        </div>
    )
}

export default Dialogs;