import CSS from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={CSS.Profile}>
            <ProfileInfo/>
            <img src='https://mobimg.b-cdn.net/v3/fetch/57/5707abffcd002b33f67ee78f0a08ff7c.jpeg'></img>
        </div>
    );
}

export default Profile