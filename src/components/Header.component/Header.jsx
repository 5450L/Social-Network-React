import headerStyles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={headerStyles.header}>
            <img src="https://www.pngmart.com/files/13/Akatsuki-Logo-PNG-Pic.png"/>
            <div className={headerStyles.loginBlock}>
                {props.isAuth ? <p>{props.login}</p> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    )
}

export default Header;