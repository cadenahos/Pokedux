import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { FcSupport } from "react-icons/fc";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";

const MessageError = ({message,handleDismiss}) => {    
    const danger = {
        color: 'red',
        margin: '20px',
        fontSize: '200px'
    } 
    return(
    <Message>
        <Message.Header>Error</Message.Header>
        <FcSupport style={danger}/>
        <p>
           {message}
        </p>
        <Button color={MAIN_COLOR}
             action={{
            onClick: () => handleDismiss,
            }}
        >clear</Button>
       
    </Message>
    )
}

export default MessageError;