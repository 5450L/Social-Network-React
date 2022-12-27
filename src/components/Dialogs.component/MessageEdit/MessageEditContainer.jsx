import MessageEdit from "./MessageEdit";
import {sendMessageActionCreator} from "../../../redux/reducers/dialogs-reducer";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {newMessageText: state.dialogsPage.newMessageText}
}
let MapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage))
        }
    }
}

const MessageEditContainer = connect(MapStateToProps, MapDispatchToProps)(MessageEdit)

export default MessageEditContainer;