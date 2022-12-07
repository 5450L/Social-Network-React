import Post from "./Post.component/Post";
import myPostsStyles from './MyPosts.module.css'

const MyPosts = () => {
    return (


            <div>
                <ul>
                    <li className='Post'><Post/></li>
                    <li className='Post'><Post/></li>
                    <li className='Post'><Post/></li>
                </ul>
            </div>


    )
}

export default MyPosts;