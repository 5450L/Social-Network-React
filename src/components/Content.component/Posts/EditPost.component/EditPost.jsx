import editPostStyles from './EditPost.module.css'

const EditPost = () => {
    return (
        <div className={editPostStyles.editPost}>
            <textarea placeholder="Type your post..."></textarea>
            <div className={editPostStyles.editButtons}>
            <button>Create post</button>
            <button>Cancel</button>
            </div>
        </div>

    )
}

export default EditPost;