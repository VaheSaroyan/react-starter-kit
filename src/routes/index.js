import React from "react";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import loadable from '@loadable/component'
import routes from "./routes";


const PrivateRoute = loadable(() => import('middlewares/PrivateRoute'));
const PublicRoute = loadable(() => import('middlewares/PublicRoute'));
const AllRoutes404 = loadable(() => import('middlewares/AllRoutes404'));


const Routes = () => (
        <Router>
            <Switch>
                {routes.map((route, i) => {
                    if (route.auth) {
                        return <PrivateRoute key={i} {...route} />;
                    }
                    return <PublicRoute key={i} {...route} />;
                })}
                <AllRoutes404/>
            </Switch>
        </Router>
);

export default Routes;
