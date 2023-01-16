import Post from "./Post/Post";
import FlModule from './Flowbar.module.css'


function Flowbar(props) {
 let b1 = props.UsersNamePostProps.map((ddd) => <Post name={ddd.name} like={ddd.like}/>);
    return (
        <div className={FlModule.Flowbar}>


         {b1}
        </div>


    );
}

export default Flowbar