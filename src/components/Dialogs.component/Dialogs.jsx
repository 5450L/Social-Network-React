import React from 'react';
import dialogsStyles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import MessageEditContainer from "./MessageEdit/MessageEditContainer";
import {Navigate} from "react-router-dom"
import {withAuthRedirectComponent} from "../../hoc/AuthRedirect";

const Dialogs = (props) => {
    if (!props.store.getState().auth.isAuth) {
        return <Navigate to={'/login'}/>
    }

    let dialogsTemplateArray = props.store.getState().dialogsPage.dialogs.map(dialog => <DialogsItem
        name={dialog.name}
        id={dialog.id} key={dialog.id}/>);
    let messagesTemplateArray = props.store.getState().dialogsPage.messages.map(message => <Message
        message={message.message}
        id={message.id} key={message.id}/>);

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
    );
};

export default Dialogs;