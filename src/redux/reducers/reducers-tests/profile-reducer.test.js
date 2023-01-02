import profileReducer, {addPostActionCreator, deletePost} from "../profile-reducer";

let state = {
    posts: [
        {message: "My first post", likeCount: 21, id: 1},
        {message: "Introduction", likeCount: 221, id: 2},
        {message: "more", likeCount: 21, id: 3},
    ]
};

it('posts array length should incremented for 1', () => {
    let action = addPostActionCreator('new post text');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('posts array length should decrease after deleting', () => {
    let action = deletePost(2);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

it('posts array length shouldn`t change after deleting if id incorrect', () => {
    let action = deletePost(1231235342);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});