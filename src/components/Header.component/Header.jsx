import headerStyles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={headerStyles.header}>
            <img src="https://www.pngmart.com/files/13/Akatsuki-Logo-PNG-Pic.png"/>
            <div className={headerStyles.loginBlock}>
                {props.isAuth ? <div><p>{props.login}</p> - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    )
}

export default Header;