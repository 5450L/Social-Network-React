import EditPost from "./EditPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/reducers/profile-reducer";

const EditPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <EditPost newPostText={props.store.getState().profilePage.newPostText} updateNewPostText={updateNewPostText}
                  addPost={addPost}/>
    );
};

export default EditPostContainer;