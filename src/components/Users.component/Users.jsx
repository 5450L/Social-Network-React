import usersStyles from './Users.module.css'

let Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => {
                    return <div key={user.id}>
                <span>
                    <div>
                        <img
                            className={usersStyles.userImage}
                            src='https://img.pravda.com/images/doc/c/5/c57f19f-bf6cc41-275622598-512933153533681-6934265882643283131-n.jpg'
                            alt='userAva'/>
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button onClick={() => (props.unfollow(user.id))}> unfollow</button>
                                :
                                <button onClick={() => (props.follow(user.id))}> follow</button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                    <div>{user.fullName}</div><div>{user.status}</div>
                    </span>
                    <span>
                    <div>{user.location.city}</div><div>{user.location.country}</div>
                    </span>
                </span>

                    </div>
                })
            }
        </div>
    )
}

export default Users;