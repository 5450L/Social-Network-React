import usersStyles from "./Users.module.css";
import React from "react";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 4;
    let slicedPages = pages.slice(curPF, curPL);
    return <div>
        {slicedPages.map((page) => {
            return (<span
                key={page}
                className={`${usersStyles.pageSelector} ${
                    props.currentPage === page && usersStyles.selectedPage
                }`}
                onClick={() => props.onPageChanged(page)}
            >{page}</span>)
        })}
    </div>
};

export default Paginator;