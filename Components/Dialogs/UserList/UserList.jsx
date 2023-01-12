import ULModule from './UserList.module.css';
import {NavLink} from "react-router-dom";
import UserItem from "./UserItem/UserItem";

function UserList() {
    return (
        <div className={ULModule.UserList}>
            <UserItem name={"Ivan"}/>
            <UserItem name={"Igor"}/>
            <UserItem name={"Vladimir"}/>
            <UserItem name={"Aleksander"}/>
            <UserItem name={"Oleg"}/>


        </div>

    );
}

export default UserList