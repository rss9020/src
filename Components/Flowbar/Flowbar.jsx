import Post from "../Post/Post";
import FlModule from './Flowbar.module.css'

function Flowbar() {
    return (

        <div className={FlModule.Flowbar}>Lenta lenta Novosti
            <Post name='Ivan'/>
            <Post name='Maria'/>


        </div>


    );
}

export default Flowbar