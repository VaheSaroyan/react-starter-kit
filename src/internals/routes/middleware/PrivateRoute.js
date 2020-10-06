import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import AutoLogout from "../../hoc/AutoLogout";

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    );
};

if (process.env.NODE_ENV === 'development') {
    PrivateRoute.propTypes = {
        component: PropTypes.object.isRequired,
        location: PropTypes.object,
    };
}


export default AutoLogout(PrivateRoute);
