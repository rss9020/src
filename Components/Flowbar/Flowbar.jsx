import Post from "../Post/Post";
import FlModule from './Flowbar.module.css'

function Flowbar() {
    return (
        <div>
        <div className={FlModule.Flowbar}>Lenta lenta Novosti</div>
        <Post/>
        </div>
    );
}

export default Flowbar