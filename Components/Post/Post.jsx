import PModule from './Post.module.css';

function Post(props) {
    return (
        <div className={PModule.Post}>
            <div>
                Autor {props.name} Post
            </div>
            <div>
                <button>OK</button>
            </div>
        </div>
    );
}

export default Post