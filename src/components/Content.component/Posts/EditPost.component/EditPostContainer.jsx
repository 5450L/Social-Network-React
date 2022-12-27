import EditPost from "./EditPost";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {newPostText: state.profilePage.newPostText};
};
let MapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
    };
};

const EditPostContainer = connect(
    MapStateToProps,
    MapDispatchToProps
)(EditPost);

export default EditPostContainer;
