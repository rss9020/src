import CSS from './NavbarMenu.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'activelink' : 'noactivelink';


function NavbarMenu() {
    return (
        <div className={CSS.NavbarMenu}>
            <div><NavLink to={"/flowbar"} className={setActive}>Flow</NavLink></div>
            <div><NavLink to={"/dialogs"} className={setActive}>Dialogs</NavLink></div>
            <div><NavLink to={"/profile"} className={setActive}>Profile</NavLink></div>
        </div>

)
    ;
}

export default NavbarMenu;