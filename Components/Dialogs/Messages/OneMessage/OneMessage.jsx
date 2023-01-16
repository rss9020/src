import CSS from './OneMessage.module.css';

function OneMessage(props) {


    return (

        <div className={CSS.OneMessage}>

            {props.MessageValue}

        </div>

    );
}


export default OneMessage