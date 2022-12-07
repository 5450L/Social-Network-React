import postStyles from './Post.module.css'

const Post = () => {
    return (
        <div className={postStyles.post}>
            <div className={postStyles.avaText}>
            <img src="https://www.film.ru/sites/default/files/people/_tmdb/8KYQUdXMIFMvtp7Ps7Ml2MIbJVE.jpg"/>
            <h3>Post text</h3>
            </div>
            <button>Like</button>
        </div>
    )
}

export default Post;