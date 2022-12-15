import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return {profilePage: state.profilePage}
};
let MapDispatchToProps = (dispatch) => {
    return {}
};

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;