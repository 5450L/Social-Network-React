const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Vetaliy',
        //     status: 'Some status',
        //     photoUrl: 'https://img.pravda.com/images/doc/c/5/c57f19f-bf6cc41-275622598-512933153533681-6934265882643283131-n.jpg',
        //     followed: false,
        //     location: {city: 'Kharkiv', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     fullName: 'Kolya',
        //     status: 'Some kolya status',
        //     photoUrl: 'https://img.pravda.com/images/doc/c/5/c57f19f-bf6cc41-275622598-512933153533681-6934265882643283131-n.jpg',
        //     followed: true,
        //     location: {city: 'Ankara', country: 'Turkey'}
        // }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users]};
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    ;
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    ;
                    return user;
                })
            };
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;
