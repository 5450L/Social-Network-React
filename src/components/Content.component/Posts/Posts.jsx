import postsStyles from './Posts.module.css';
import MyPostsContainer from "./MyPosts.component/MyPostsContainer";
import EditPostContainer from "./EditPost.component/EditPostContainer";

const Posts = (props) => {
    return (
        <div className={postsStyles.Posts}>
            <h2>Posts</h2>
            <EditPostContainer store={props.store}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Posts;