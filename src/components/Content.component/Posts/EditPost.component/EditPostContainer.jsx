import EditPost from "./EditPost";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
  return { newPostText: state.profilePage.newPostText };
};
let MapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const EditPostContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(EditPost);

export default EditPostContainer;
