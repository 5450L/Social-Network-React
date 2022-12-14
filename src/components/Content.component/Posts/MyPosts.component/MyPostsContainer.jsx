import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    return (
        <MyPosts posts={props.store.getState().profilePage.posts}/>
    )
}

export default MyPostsContainer;