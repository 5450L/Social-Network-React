import Post from "./Post.component/Post";
import myPostsStyles from './MyPosts.module.css'

const MyPosts = (props) => {

    let postTemplates = props.posts.map(post => <li><Post name={post.name} likeCount={post.likeCount}/></li>);

    return (
        <div>
            <ul>
                {postTemplates}
            </ul>
        </div>
    )
}

export default MyPosts;