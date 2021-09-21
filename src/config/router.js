import React from "react";
import About from '../components/about'
import Home from '../components/home'
import Personal from '../components/personal'
import Contact from '../components/contact'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/personal' component={Personal} />
            <Route  path='/contact' component={Contact} />
            </Switch>

        </Router>
    )
}

export default AppRouter;