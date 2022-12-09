import dialogsStyles from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={`${dialogsStyles.message} ${dialogsStyles.respond}`}>
            <img src='https://images.genius.com/2ad1a3d4aa00e2329294e5b71c8cdf7b.1000x1000x1.jpg'/>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;