import CSS from './Dialogs.module.css';
import UserList from "./UserList/UserList";
import Messages from "./Messages/Messages";


function Dialogs(props) {


    return (
        <div className={CSS.Dialog}>

            <UserList UsersNameDialogProps={props.UsersNameDialogProps}/>
            <Messages MessagesValueProps={props.MessagesValueProps} SendMessagesProps={props.SendMessageProps}/>


        </div>
    );
}

export default Dialogs