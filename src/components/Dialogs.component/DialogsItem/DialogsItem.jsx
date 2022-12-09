import dialogsStyles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={dialogsStyles.dialogsItem}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Gheorghe_Dima.jpg"/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem;