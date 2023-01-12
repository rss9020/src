import Post from "./Post/Post";
import FlModule from './Flowbar.module.css'

function Flowbar() {
    return (

        <div><h3>Lenta</h3>
            <Post name='Ivan' like='8'/>
            <Post name='Maria' like='6'/>


        </div>


    );
}

export default Flowbar