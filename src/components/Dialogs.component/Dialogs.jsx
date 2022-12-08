import dialogsStyles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

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
            <div className={dialogsStyles.messages}>
                {messagesTemplateArray}
            </div>
        </div>
    )
}

export default Dialogs;