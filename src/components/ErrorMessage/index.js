import React from 'react';
import { Message } from 'semantic-ui-react';
import { FcSupport } from "react-icons/fc";

const MessageError = ({message}) => {    
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
    </Message>
    )
}

export default MessageError;