import React from "react";
import loadable from '@loadable/component'
import routes from "./routes";


const AllRoutes404 = loadable(() => import('../internals/routes/middleware/AllRoutes404'));
const PrivateRoute = loadable(() => import('../internals/routes/middleware/PrivateRoute'));
const PublicRoute = loadable(() => import('../internals/routes/middleware/PublicRoute'));
const Switch = require('react-router-dom').Switch;
const Router = require('react-router-dom').BrowserRouter;

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
