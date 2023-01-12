import PDialogs from './Dialogs.module.css';
import UserList from "./UserList/UserList";



function Dialogs(props) {
    return (
        <div className={PDialogs.Dialog}>
<UserList/>

            <div className={PDialogs.Message}>
                <div>Hello</div>
                <div>Where you from?</div>

            </div>
        </div>
    );
}

export default Dialogs