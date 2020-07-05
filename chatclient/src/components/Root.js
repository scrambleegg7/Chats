import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chat from '../containers/Chat'
import Join from '../containers/Join'

const Root = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={
                    props => (<Join {...props} />)
                } />
                <Route exact path="/chat" render={
                    props => (<Chat {...props} />)
                } />


            </Switch>
        </BrowserRouter>

    )




}


export default Root;