import CSS from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={CSS.Profile}>
            <ProfileInfo name={props.name}/>


        </div>
    );
}

export default Profile