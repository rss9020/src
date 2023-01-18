import CSS from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={CSS.ProfileInfoWrapper}>
            <div className={CSS.Avatar}>
                <img src='https://mobimg.b-cdn.net/v3/fetch/57/5707abffcd002b33f67ee78f0a08ff7c.jpeg'></img>
            </div>

            <div className={CSS.ProfileInfo}>
                Name: Stalker<br/>
                Age: 33<br/>
                Gender: Male<br/>
            </div>

        </div>
    );
}

export default ProfileInfo