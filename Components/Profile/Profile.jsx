import PProfile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={PProfile.Profile}>
            <ProfileInfo/>
        </div>
    );
}

export default Profile