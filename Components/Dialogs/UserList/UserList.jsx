import ULModule from './UserList.module.css';
import UserItem from "./UserItem/UserItem";

let UserNames = [
    {name: 'Ivan'},
    {name: 'Kaban'},
    {name: 'Bratan'},
    {name: 'Bodan'},
];

function UserList(props) {
    return (
        <div className={ULModule.UserList}>
            <UserItem name={"Ivan"}/>
            <UserItem name={"Igor"}/>
            <UserItem name={"Vladimir"}/>
            <UserItem name={"Aleksander"}/>
            <UserItem name={"Oleg"}/>
            <UserItem name={props.UserNameProps}/>




        </div>

    );
}

export default UserList