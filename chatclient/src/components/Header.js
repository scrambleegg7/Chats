import React from "react";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link, Redirect} from 'react-router-dom';


import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const styles = theme => ({
    title: {
        flexGrow: 1,
    }
});

const Header = props => {

    const { classes, room, data } = props;

    if (data) {
        console.log("room (Header) -->",data.room)

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Chat Room name : {data.room}
                </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu"  
                to="/"
                component={Link}
            >
                <CancelPresentationIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
    )};
};

export default withStyles(styles)(Header);
