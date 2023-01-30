import CSS from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    const setActive = ({isActive}) => isActive ? 'activelink' : 'noactivelink';

    return (
      <div>
          <NavLink to={'/profile/'+props.name} className={setActive}>
    <img src={`${props.imgsrc}`} alt={`${props.name}`} /> {props.name}
          </NavLink>
      </div>


    );
}

export default FriendItem;