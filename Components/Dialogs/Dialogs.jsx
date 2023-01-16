import PDialogs from './Dialogs.module.css';
import UserList from "./UserList/UserList";
import Messages from "./Messages/Messages";


function Dialogs(props) {
    return (
        <div className={PDialogs.Dialog}>

            <UserList UsersNameDialogProps = {props.UsersNameDialogProps}/>
            <Messages MessagesValueProps={props.MessagesValueProps}/>


        </div>
    );
}

export default Dialogs