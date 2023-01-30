import CSS from './Messages.module.css';
import OneMessage from "./OneMessage/OneMessage";
import React from "react";

function Messages(props) {

    let MessageValueMap = props.MessagesValueProps.map((ddd) => <OneMessage MessageValue={ddd.MessageValue} IncomingMessage={ddd.incoming}/>);

    let PostArea = React.createRef();
    let SendMessage = () => {
        let b = PostArea.current.value;

        props.SendMessagesProps(b);
    };

    return (

        <div className={CSS.Messages}>
            {/*//Массив заполняется мапом, данные в state.js*/}
            {MessageValueMap}

            <div className={CSS.AddPost}>
                <div>
                    <textarea ref={PostArea} placeholder={'Type your message'}></textarea>
                </div>
                <div >
                    <button onClick={SendMessage}>Send message</button>
                </div>
            </div>


        </div>

    );
}

export default Messages