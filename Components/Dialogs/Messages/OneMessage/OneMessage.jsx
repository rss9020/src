import CSS from './OneMessage.module.css';

function OneMessage(props) {

  let CSSClass;

  if (props.IncomingMessage==1) {CSSClass="OutcomingMessage"} else {CSSClass="IncomingMessage"};

    return (

        <div className={CSSClass}>

            {props.MessageValue}


        </div>

    );
}


export default OneMessage