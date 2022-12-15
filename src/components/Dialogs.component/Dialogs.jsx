import React from 'react';
import dialogsStyles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import MessageEditContainer from "./MessageEdit/MessageEditContainer";

const Dialogs = (props) => {
    console.log(props);

    let dialogsTemplateArray = props.store.getState().dialogsPage.dialogs.map(dialog => <DialogsItem
        name={dialog.name}
        id={dialog.id}/>);
    let messagesTemplateArray = props.store.getState().dialogsPage.messages.map(message => <Message
        message={message.message}
        id={message.id}/>);

    return (
        <div className={dialogsStyles.dialogs}>

            <div className={dialogsStyles.dialogsItems}>
                {dialogsTemplateArray}
            </div>

            <div className={dialogsStyles.messagesArea}>

                <MessageEditContainer store={props.store}/>

                <div className={dialogsStyles.messages}>
                    {messagesTemplateArray}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;