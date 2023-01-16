import CSS from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={CSS.ProfileInfo}>
            <b>My Profile Info</b>
            <p>Name: Stalker</p>
            Age: 33
            Gender: Male
        </div>
    );
}

export default ProfileInfo