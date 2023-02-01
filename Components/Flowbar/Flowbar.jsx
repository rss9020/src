import Post from "./Post/Post";
import CSS from './Flowbar.module.css'
import React from "react";

function Flowbar(props) {
    let PostArray = props.UsersNamePostProps.map((ddd) => <Post id={ddd.id} name={ddd.name} like={ddd.like}
                                                                src={ddd.src} AddLikeProps={props.AddLikeProps}
                                                                DisLikeProps={props.DisLikeProps}/>);

    let TArea = React.createRef();
    const AddPost = () => {
        props.AddPostProps(TArea.current.value);


    }


    return (
        <div className={CSS.Flowbar}>

            <div><textarea ref={TArea} placeholder={'Type your post'}></textarea></div>
            <div>
                <button onClick={AddPost}>post it!</button>
            </div>
            {PostArray}
        </div>


    );
}

export default Flowbar