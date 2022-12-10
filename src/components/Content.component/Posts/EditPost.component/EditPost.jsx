import editPostStyles from './EditPost.module.css'
import React from "react";

const EditPost = (props) => {


    let newPost = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST', payload: {}})
    }

    let onPostTextChange = () => {
        let text = newPost.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', payload: {newPostText: text}})
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