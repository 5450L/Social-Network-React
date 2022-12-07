import navStyles from './Nav.module.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a className={navStyles.linkItem}>Profile</a></li>
                <li><a className={navStyles.linkItem}>Messages</a></li>
                <li><a className={navStyles.linkItem}>News</a></li>
                <li><a className={navStyles.linkItem}>Music</a></li>
                <li><a className={navStyles.linkItem}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;