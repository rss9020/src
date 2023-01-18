import CSS from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={CSS.Profile}>
            <ProfileInfo/>

        </div>
    );
}

export default Profile