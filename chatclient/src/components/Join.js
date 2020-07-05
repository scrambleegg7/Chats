import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Typography, Grid, Button, Paper, TextField} from '@material-ui/core';

import { withStyles, useTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          //width: '25ch',
        },
      },
      joinButton: {
        ...theme.typography.join,
        fontSize: "1rem",
        marginTop:"2rem",
        height: 35,
        padding: 15,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
          }
        //borderRadius: 20,
      }
    
    
})




const Join = (props) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [chatjoin, setChatJoin] = useState(""); 

    const {classes, joinroom} = props;

    const onhandleChangeJoin = (e) => {
        //e.preventDefault();

        //console.log("name ---> ", name);
        //console.log("room ---> ", room);
        
        const credentials = {
            name: name,
            room: room
        }

        joinroom(credentials);

        setChatJoin(true)

        
    }

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const roomChange = (e) => {
        setRoom(e.target.value)
    }

    return (

        
        <Grid container justify="center" direction="row">

            
            
            <Grid item style={{
                    marginLeft: "3em",
                    marginTop: "3em",
                    textAlign:  "inherit"
                }}
            > 
                <Typography variant="h2">Join</Typography>

                <Grid container direction="column">

                    <Grid item>    
                        <TextField id="name" label="name" onChange={nameChange} />
                    </Grid>
                    <Grid item>
                        <TextField id="room" label="room" onChange={roomChange} />
                    </Grid>

                </Grid>
                <Grid container justify="center" item>
                    <Button
                        to="/chat"
                        component={Link}
                        variant="outlined"
                        className={classes.joinButton}
                        onClick={onhandleChangeJoin}
                    >
                        <span style={{ marginRight: 7 }}>Join</span>
                    </Button>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default withStyles(styles)(Join);