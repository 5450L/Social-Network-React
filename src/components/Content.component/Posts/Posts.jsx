import myPosts from "./MyPosts.component/MyPosts";
import EditPost from "./EditPost.component/EditPost";
import postsStyles from './Posts.module.css'
import MyPosts from "./MyPosts.component/MyPosts";

const Posts = (props) => {
    return (
        <div className={postsStyles.Posts}>
            <h2>Posts</h2>
            <EditPost newPostText={props.profileData.newPostText} dispatch={props.dispatch}/>
            <MyPosts posts={props.profileData.posts}/>
        </div>
    )
}

export default Posts;