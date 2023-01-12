import UIModule from './UserItem.module.css';
import {NavLink} from "react-router-dom";

function UserItem(props) {
    return (
        <div><NavLink to={"/dialogs/" + props.name}> {props.name} </NavLink></div>

    );
}

export default UserItem