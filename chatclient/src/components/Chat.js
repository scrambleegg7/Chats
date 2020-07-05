import React, {useState, useEffect} from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

import {Typography, Grid, TextField} from '@material-ui/core';

import Header from '../containers/Header';
import Messages from './Messages';
import Input from './Input';

var socket;

const Chat = (props) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [user, setUSer] = useState("");

    const [users, setUsers] = useState("");

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const {data, location, classes } = props;
    const ENDPOINT = 'localhost:8080'; 

    //setName( data ? data.name : "");
    //setRoom( data ? data.room : "");


    useEffect( () => {

        console.log("useEffect 1st...")
        //console.log("credential data from join. --> ",data)        
        const name =  data ? data.name : "";
        const room =  data ? data.room : "";
                

        console.log("name, room --> ", name, room)

        socket = io(ENDPOINT)
        console.log("socket info --> ", socket)

        socket.emit('join', {name, room}, (error) => {
            if (error)
                alert("error alert");  
        })
        
    }, [data])


    useEffect( () => {

        console.log("useEffect 2nd...")

        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        //console.log("Messages ---> ", message, messages)

        socket.on("roomData", ({users}) => {
            setUsers(users);
        }) 
        
    }, [])


    const sendMessage = (e) => {

        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('')
            })
        }

        console.log("entered message ---> ", message)
        console.log("array [messages] ---> ", messages)
    }
    // function for sending message

    if (!data) {
        return (
            <div>
                Loading....
            </div>
        )
    } 
    else {

    return (

        

        <Grid container direction="column">
            <Grid item  xs={6}>

                <Header room={data.room} />
                <Messages messages={messages} name={data.name} />
            
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

            </Grid>
        </Grid>


    )}
}

export default Chat;