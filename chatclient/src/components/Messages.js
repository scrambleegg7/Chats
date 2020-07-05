import React from "react";
import { withStyles, MuiThemeProvider, mergeClasses } from "@material-ui/styles";


import Avatar from '@material-ui/core/Avatar';

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const styles = theme => ({
    message: {
        //padding: 5 % 0;
        flex: 1,
    }
});

const Messages = (props) => {

    const { classes, messages, name } = props;

    if (name) {

        return (
            <>
                <ScrollToBottom className={classes.message}>
                    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
                </ScrollToBottom>
            </>
        );
    }
    else {
        return (
            <div>loading....</div>
        )
    }


};

export default withStyles(styles)(Messages);
