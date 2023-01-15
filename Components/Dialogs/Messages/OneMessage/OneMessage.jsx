import POneMessage from './OneMessage.module.css';

function OneMessage(props) {
    return (

        <div className={POneMessage.Message}>
            {props.MessageValue}
        </div>

    );
}

export default OneMessage