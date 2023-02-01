import CSS from './Post.module.css';


function Post(props) {
    let AddLike = () => {

        props.AddLikeProps(props.id);

    }
    let DisLike = () => {
        props.DisLikeProps(props.id);

    }

    return (
        <div className={CSS.PostWrapper}>

            <div className={CSS.Post}>
                <div>Autor <b>{props.name}</b> Post</div>
                <div>Have <b>{props.like} </b> likes</div>
                <div className={CSS.ButtonBlock}>
                    <button onClick={AddLike}>OK</button>
                    <button onClick={DisLike}>neOK</button>
                </div>
            </div>
            <div className={CSS.PostValue}>

                <img src={`${props.src}`} alt={`${props.src}`}/>
            <div>    {`${props.src}`}</div>

            </div>
        </div>
    );
}

export default Post