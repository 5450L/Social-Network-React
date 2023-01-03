import {NavLink} from "react-router-dom";
import usersStyles from "./Users.module.css";
import React from "react";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div key={user.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                      className={usersStyles.userImage}
                      src={user.photos.small ? user.photos.small : "https://img.pravda.com/images/doc/c/5/c57f19f-bf6cc41-275622598-512933153533681-6934265882643283131-n.jpg"}
                      alt="userAva"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }
                    }>
                        unfollow
                    </button> : (
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }
                        }> follow </button>
                    )}
                    </div>
                    </span>
        <span>
                    <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    </span>
                    <span>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                    </span>
                    </span>
    </div>
};

export default User;