import editPostStyles from './EditPost.module.css'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../../utils/validators/validators";
import {Textarea} from "../../../shared/FormControls/FormControls";

const EditPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPost'} component={Textarea} validate={[required, maxLengthCreator(10)]}
                   placeholder="Type your post..."/>
            <div className={editPostStyles.editButtons}>
                <button>Create post</button>
                <button>Cancel</button>
            </div>
        </form>
    );
};

const EditPostReduxForm = reduxForm({form: 'newPost'})(EditPostForm);

const EditPost = (props) => {

    let onAddPost = (form) => {
        props.addPost(form.newPost);
    };

    return (
        <div className={editPostStyles.editPost}>
            <EditPostReduxForm {...props} onSubmit={onAddPost}/>
        </div>

    )
}

export default EditPost;