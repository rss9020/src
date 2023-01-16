import ULModule from './UserList.module.css';
import UserItem from "./UserItem/UserItem";



function UserList(props) {
  let UsersNameDialogMap = props.UsersNameDialogProps.map((ddd) => <UserItem name={ddd.name}/>);

    return (
        <div className={ULModule.UserList}>
   {/*load data from array index.js*/}
       {UsersNameDialogMap}


        </div>

    );
}

export default UserList