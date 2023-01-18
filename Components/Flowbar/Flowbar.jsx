import Post from "./Post/Post";
import CSS from './Flowbar.module.css'


function Flowbar(props) {
    let b1 = props.UsersNamePostProps.map((ddd) => <Post name={ddd.name} like={ddd.like} src={ddd.src}/>);
    return (
        <div className={CSS.Flowbar}>

            <textarea></textarea>
            <button onClick={()=>{alert('test.ok!')}}>post it!</button>
            {b1}
        </div>


    );
}

export default Flowbar