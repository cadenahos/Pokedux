import React from 'react';
import { Message } from 'semantic-ui-react';
import { FcSupport } from "react-icons/fc";

const MessageError = () => {    
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
            We have an error loading the page
        </p>
    </Message>
    )
}

export default MessageError;