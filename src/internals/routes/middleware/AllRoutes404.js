import React from "react";
import { Route } from "react-router-dom";
import Page404 from "../../components/Page404";

const AllRoutes404 = () => {
    console.log(111110)
  return <Route path="*" exact={true} component={() => <Page404 />} />;
};

export default AllRoutes404;
