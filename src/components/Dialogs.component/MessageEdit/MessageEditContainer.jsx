import MessageEdit from "./MessageEdit";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/reducers/dialogs-reducer";

const MessageEditContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let messageTextChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <MessageEdit newMessageText={props.store.getState().dialogsPage.newMessageText}
                     messageTextChange={messageTextChange} sendMessage={sendMessage}/>
    );
};

export default MessageEditContainer;