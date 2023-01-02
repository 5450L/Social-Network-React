import React from "react";
import postsStyles from './Posts.module.css';
import MyPostsContainer from "./MyPosts.component/MyPostsContainer";
import EditPostContainer from "./EditPost.component/EditPostContainer";

const Posts = React.memo((props) => {
    console.log('render');
    return (
        <div className={postsStyles.Posts}>
            <h2>Posts</h2>
            <EditPostContainer/>
            <MyPostsContainer/>
        </div>)

});

export default Posts;