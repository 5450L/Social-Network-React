import myPosts from "./MyPosts.component/MyPosts";
import EditPost from "./EditPost.component/EditPost";
import postsStyles from './Posts.module.css'
import MyPosts from "./MyPosts.component/MyPosts";

const Posts = () => {
    return (


        <div className={postsStyles.Posts}>
            <h2>Posts</h2>
            <EditPost/>
            <MyPosts/>
        </div>


    )
}

export default Posts;