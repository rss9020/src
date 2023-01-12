import PProfileInfo from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={PProfileInfo.ProfileInfo}>
            My ProfileInfo
            Age: 33
            Gender: Male
        </div>
    );
}

export default ProfileInfo