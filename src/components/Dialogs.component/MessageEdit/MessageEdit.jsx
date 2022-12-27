import React from "react";
import {Field, reduxForm} from "redux-form";

const MessageEditForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessage'} component={'textarea'} placeholder="Type your message..."/>
            <div>
                <button>Send Message</button>
                <button>Cancel</button>
            </div>

        </form>
    );
};

const MessageEditReduxForm = reduxForm({form: 'messageEdit'})(MessageEditForm);

const MessageEdit = (props) => {

    const onSubmit = (form) => {
        console.log(form);
        props.sendMessage(form.newMessage);
    };

    return (
        <MessageEditReduxForm {...props} onSubmit={onSubmit}/>
    );
};

export default MessageEdit;