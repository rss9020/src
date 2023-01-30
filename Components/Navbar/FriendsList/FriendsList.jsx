import CSS from './FriendsList.module.css';
import FriendItem from "./FriendItem/FriendItem";

const FriendsList = (props) => {
    let FriendsListMap = props.FriendsListProps.map((ddd) => <FriendItem name={ddd.name} imgsrc={ddd.src}/>);
    return (
        <div className={CSS.FriendsList}>

            {FriendsListMap}

        </div>
    );
}

export default FriendsList;