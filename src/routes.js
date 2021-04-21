import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import AlterProject from './pages/project/alter.js'

import Header from './components/Header'
   

const Routes = () => (
    <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/alterar/:id" component={AlterProject} />
            </Switch>
    </BrowserRouter>
);

export default Routes;