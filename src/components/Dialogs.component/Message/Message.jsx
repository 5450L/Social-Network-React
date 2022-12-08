import dialogsStyles from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={dialogsStyles.message}>{props.message}</div>
    )
}

export default Message;