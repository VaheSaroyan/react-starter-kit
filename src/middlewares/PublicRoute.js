import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useSelector((state) => state.user);

    if (isAuthenticated) {
        return <Redirect to="/"/>;
    }

    return <Route {...rest} render={(props) => <Component {...props} />}/>;
};

if (process.env.NODE_ENV === 'development') {
    PublicRoute.propTypes = {
        component: PropTypes.object.isRequired,
        location: PropTypes.object,
    };
}

export default PublicRoute;
