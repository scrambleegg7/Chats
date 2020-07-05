import React from 'react';


import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ReactEmoji from "react-emoji";


const styles = (theme) => ({
    messageContainer: {
      display: "flex-end",
      margintop: "3px"
    },
  
    messageBox: {
      //background: "#f3f3f3",
      borderRadius: "20px",
      padding: "5px 20px",
      //color: "white",
      display: "inline-block",
      maxwidth: "80%",
      alignItems: "center"
    },
    messageBoxBlue: {
      background: "#f3f3f3",
      borderRadius: "20px",
      padding: "5px 20px",
      color: "white",
      display: "inline-block",
      maxwidth: "80%"
    },
  
    messageText: {
      width: "100%",
      alignItems: "center",
      //letter-spacing: 0;
      //float: left;
      fontSize: "1.2em",
      wordWrap: "breakword"
    },
    sentText: {
      alignItems: "center",
      fontFamily: "Helvetica",
      color: "#828282",
      letterSpacing: "0.3px",
      padding: theme.spacing(2)
    }
  });
  


const Message = (props) => {

    const { classes, message, name } = props;
    const { text, user } = message;
  

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    if (message) {
        console.log("name --> ", name)
        console.log("message : user ", text, user)
    }

    return isSentByCurrentUser ? (
        <Grid
          container
          alignItems="center"
          justify="flex-end"
          className={classes.messageContainer}
        >
          <Grid item>
            <Typography className={classes.sentText}>{trimmedName}</Typography>
          </Grid>
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            className={classes.messageBox}
          >
            <Typography className={classes.messageText}>
              {ReactEmoji.emojify(text)}
            </Typography>
          </Box>
        </Grid>
      ) : (
        <Grid container className={classes.messageContainer}>
          <Box
            className={classes.messageBox}
            bgcolor="text.secondary"
            color="background.paper"
          >
            <Typography className={classes.messageText}>
              {ReactEmoji.emojify(text)}
            </Typography>
          </Box>
          <Typography className={classes.sentText}>{user}</Typography>
        </Grid>
      );
};
    
export default withStyles(styles)(Message);
