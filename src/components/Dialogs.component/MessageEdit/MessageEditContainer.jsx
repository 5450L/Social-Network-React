import MessageEdit from "./MessageEdit";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/reducers/dialogs-reducer";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {newMessageText: state.dialogsPage.newMessageText}
}
let MapDispatchToProps = (dispatch) => {
    return {
        messageTextChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const MessageEditContainer = connect(MapStateToProps, MapDispatchToProps)(MessageEdit)

export default MessageEditContainer;