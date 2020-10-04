import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute, AllRoutes404 } from "../internals";
import routes from "./routes";
import LoadingIndicator from "../components/LoadingIndicator";

const Routes = () => (
  <Suspense fallback={LoadingIndicator}>
    <Router>
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />;
          }
          return <PublicRoute key={i} {...route} />;
        })}
        <AllRoutes404 />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
