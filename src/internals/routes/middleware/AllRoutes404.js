import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";

const Page404 = loadable(() => import('../../components/Page404'))

const AllRoutes404 = () => {
  return <Route path="*" exact={true} component={() => <Page404 />} />;
};

export default AllRoutes404;
