import Post from "./Post.component/Post";
import myPostsStyles from './MyPosts.module.css'
import {PureComponent} from "react";

class MyPosts extends PureComponent {

    postTemplates = this.props.profilePage.posts.map(post => <li key={post.id}><Post post={post}/></li>);

    render() {
        return (
            <div className={myPostsStyles.myPosts}>
                <ul>
                    {this.postTemplates}
                </ul>
            </div>
        )
    }
}

export default MyPosts;