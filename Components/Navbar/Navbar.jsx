import NModule from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : 'noactive-link';


function Navbar () {
    return (
        <div className={NModule.Navbar}>

                <div><NavLink to={"/flowbar"} className={setActive}>Flow</NavLink></div>
                <div><NavLink to={"/dialogs"} className={setActive}>Dialogs</NavLink></div>
                <div><NavLink to={"/profile"} className={setActive}>Profile</NavLink></div>

        </div>
    );
}

export default Navbar;