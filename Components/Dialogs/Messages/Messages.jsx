import PMessages from './Messages.module.css';
import OneMessage from "./OneMessage/OneMessage";

function Messages(props) {

//можно удалить, данные пеерехали в index.js
    /*    let MessagesValue = [
            {id: 1, MessageValue: 'Hello'},
            {id: 2, MessageValue: 'Where you from'},
            {id: 3, MessageValue: 'I from Canada'},
            {id: 4, MessageValue: 'It is great!'}
        ];*/
    let MessageValueMap = props.MessagesValueProps.map((ddd) => <OneMessage MessageValue={ddd.MessageValue}/>);

    return (

        <div className={PMessages.Messages}>
            {/*//Массив заполняется мапом, данные в index.js*/}
            {MessageValueMap}
        </div>

    );
}

export default Messages