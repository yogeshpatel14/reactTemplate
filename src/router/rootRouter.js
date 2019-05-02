import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

/**
 * route path
 */
import { rout_home, route_login } from './routePath';

/**
 * import class
 */
import Home from '../containers/home/home';
import AuthLogin from '../containers/login/authLogin';

const RootRouter = () => {
    return <Router>
        <Switch>
            <Route path={rout_home} exact component={Home}/>
            <Route path={route_login} component={AuthLogin}/>
        </Switch>
    </Router>
} 

export default RootRouter;