import CSS from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const setActive = ({isActive}) => isActive ? 'activelink' : 'noactivelink';


function Navbar() {
    return (
       /* <div className={CSS.Navbar}>*/
            <div className={CSS.NavbarWrapper}>
                <NavbarMenu/>
                <div className={CSS.NavbarMiddle}></div>
             <FriendsList/>
            </div>

      /*  </div>*/
    );
}

export default Navbar;