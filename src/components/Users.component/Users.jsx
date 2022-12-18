import React from "react";
import usersStyles from './Users.module.css'
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    onGetUsers = () => {
        if (this.props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    };

    render() {
        return (
            <div>
                {/*<button onClick={this.onGetUsers}>Get Users</button>*/}
                {
                    this.props.users.map(user => {
                        return <div key={user.id}>
                <span>
                    <div>
                        <img
                            className={usersStyles.userImage}
                            src={user.photos.small ? user.photos.small : 'https://img.pravda.com/images/doc/c/5/c57f19f-bf6cc41-275622598-512933153533681-6934265882643283131-n.jpg'}
                            alt='userAva'/>
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button onClick={() => (this.props.unfollow(user.id))}> unfollow</button>
                                :
                                <button onClick={() => (this.props.follow(user.id))}> follow</button>
                        }
                    </div>
                </span>
                            <span>
                    <span>
                    <div>{user.name}</div><div>{user.status}</div>
                    </span>
                    <span>
                    <div>{'user.location.city'}</div><div>{'user.location.country'}</div>
                    </span>
                </span>

                        </div>
                    })
                }
            </div>
        )
    };
}

export default Users;