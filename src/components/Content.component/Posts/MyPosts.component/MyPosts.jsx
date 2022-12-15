import Post from "./Post.component/Post";
import myPostsStyles from './MyPosts.module.css'

const MyPosts = (props) => {
    let postTemplates = props.profilePage.posts.map(post => <li key={post.id}><Post post={post}/></li>);

    return (
        <div className={myPostsStyles.myPosts}>
            <ul>
                {postTemplates}
            </ul>
        </div>
    )
}

export default MyPosts;