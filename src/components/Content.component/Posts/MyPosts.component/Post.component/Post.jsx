import postStyles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={postStyles.post}>
            <div className={postStyles.avaText}>
                <img src="https://www.film.ru/sites/default/files/people/_tmdb/8KYQUdXMIFMvtp7Ps7Ml2MIbJVE.jpg"/>
                <h3>{props.message} </h3>
            </div>
            <button>{props.likeCount} likes</button>
        </div>
    )
}

export default Post;