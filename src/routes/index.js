import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../Components/Header/Header';
import Homepage from '../Components/Homepage/Homepage';

const routes = (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage} />
        </Switch>
    </div>
)

export default routes;