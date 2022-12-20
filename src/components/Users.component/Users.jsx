import usersStyles from "./Users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Uses = (props) => {
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
      <div>
        {slicedPages.map((page) => {
          return (
            <span
              key={page}
              className={`${usersStyles.pageSelector} ${
                props.currentPage === page && usersStyles.selectedPage
              }`}
              onClick={() => props.onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {/*<button onClick={this.onGetUsers}>Get Users</button>*/}
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    className={usersStyles.userImage}
                    src={
                      user.photos.small
                        ? user.photos.small
                        : "https://img.pravda.com/images/doc/c/5/c57f19f-bf6cc41-275622598-512933153533681-6934265882643283131-n.jpg"
                    }
                    alt="userAva"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => props.unfollow(user.id)}>
                    {" "}
                    unfollow
                  </button>
                ) : (
                  <button onClick={() => props.follow(user.id)}> follow</button>
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
        );
      })}
    </div>
  );
};

export default Uses;
