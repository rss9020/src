import CSS from './Dialogs.module.css';
import UserList from "./UserList/UserList";
import Messages from "./Messages/Messages";
import React from "react";

function Dialogs(props) {
    let PostArea = React.createRef();
    let SendMessage = () => {
        let b = PostArea.current.value;
        alert(b);
    }

    return (
        <div className={CSS.Dialog}>

            <UserList UsersNameDialogProps={props.UsersNameDialogProps}/>
            <Messages MessagesValueProps={props.MessagesValueProps}/>

            <div className={CSS.AddPost}>
                <div><textarea ref={PostArea} placeholder={'Сообщение'}></textarea></div>
                <div><button onClick={SendMessage}>Send message</button></div>
            </div>
        </div>
    );
}

export default Dialogs