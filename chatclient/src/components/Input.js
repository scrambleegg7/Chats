import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField";


const Input = props => {

    const { setMessage, sendMessage, message } = props;

    const MessageOnChange = (e) => {

        if (e) {
            setMessage(e.target.value);
        }
    
    }

    const EnterKeyPress = (e) => {

        return (
        e.key === "Enter" ? sendMessage(e) : null
        )
    }

    return (
        <form className="form">
        <TextField id="message" 
            placeholder="Please type message."
            value={message}
            onChange={MessageOnChange}
            onKeyPress={EnterKeyPress}
            label="message" />
            
        </form>
    )

}
  
  export default Input;