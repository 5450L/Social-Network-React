import navStyles from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div className={navStyles.nav}>
            <ul>
                <li className={navStyles.linkItem}><NavLink to='/profile'
                                                            className={(navData) => (navData.isActive ? `${navStyles.active}` : 'none')}>Profile</NavLink>
                </li>
                <li className={navStyles.linkItem}><NavLink to='/dialogs'
                                                            className={(navData) => (navData.isActive ? `${navStyles.active}` : 'none')}>Messages</NavLink>
                </li>
                <li className={navStyles.linkItem}><NavLink to='/news'
                                                            className={(navData) => (navData.isActive ? `${navStyles.active}` : 'none')}>News</NavLink>
                </li>
                <li className={navStyles.linkItem}><NavLink to='/music'
                                                            className={(navData) => (navData.isActive ? `${navStyles.active}` : 'none')}>Music</NavLink>
                </li>
                <li className={navStyles.linkItem}><NavLink to='/settings'
                                                            className={(navData) => (navData.isActive ? `${navStyles.active}` : 'none')}>Settings</NavLink>
                </li>
                <li className={navStyles.linkItem}><NavLink to='/users'
                                                            className={(navData) => (navData.isActive ? `${navStyles.active}` : 'none')}>Users</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;