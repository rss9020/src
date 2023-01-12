import PModule from './Post.module.css';

function Post(props) {
    return (
        <div className={PModule.Post}>
            <div>
                <div>Autor {props.name} Post</div>
                <div>Have {props.like} likes</div>
            </div>
            <div>
                <button>OK</button>
            </div>
        </div>
    );
}

export default Post