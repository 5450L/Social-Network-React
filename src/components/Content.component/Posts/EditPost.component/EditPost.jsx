import editPostStyles from './EditPost.module.css'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const EditPost = (props) => {

    let newPost = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostTextChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={editPostStyles.editPost}>
            <textarea placeholder="Type your post..." ref={newPost} onChange={onPostTextChange}
                      value={props.newPostText}></textarea>
            <div className={editPostStyles.editButtons}>
                <button onClick={addPost}>Create post</button>
                <button>Cancel</button>
            </div>
        </div>

    )
}

export default EditPost;