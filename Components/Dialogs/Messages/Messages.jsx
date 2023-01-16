import PMessages from './Messages.module.css';
import OneMessage from "./OneMessage/OneMessage";

function Messages(props) {

    let MessageValueMap = props.MessagesValueProps.map((ddd) => <OneMessage MessageValue={ddd.MessageValue} IncomingMessage={ddd.incoming}/>);

    return (

        <div className={PMessages.Messages}>
            {/*//Массив заполняется мапом, данные в index.js*/}
            {MessageValueMap}

        </div>

    );
}

export default Messages