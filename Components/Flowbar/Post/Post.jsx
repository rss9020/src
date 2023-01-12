import PModule from './Post.module.css';

function Post(props) {
    return (
        <div className={PModule.Post}>
            <div>
                <div>Autor <b>{props.name}</b> Post</div>
                <div>Have <b>{props.like} </b> likes</div>
            </div>
            <div>
                <button>OK</button>
            </div>
        </div>
    );
}

export default Post