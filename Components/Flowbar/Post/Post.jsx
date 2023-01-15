import PModule from './Post.module.css';

function Post(props) {
    return (
        <div className={PModule.Post}>
            <div>Autor <b>{props.name}</b> Post</div>
            <div>Have <b>{props.like} </b> likes</div>
            <div className={PModule.ButtonBlock}>
                <button>OK</button> <button>neOK</button>
            </div>
        </div>
    );
}

export default Post