import usersStyles from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import User from "./User";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 4;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}/>
            {props.users.map((user) => {
                return (
                    <User user={user} followingInProgress={props.followingInProgress} follow={props.follow}
                          unfollow={props.unfollow} key={user.id}/>
                );
            })}
        </div>
    );
};

export default Users;
