// import libs
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// import Nav from '../components/Nav';

// import components
// import Navigation from '../containers/navigation';
// import ScrollTop from '../components/scroll-top';
// import Footer from '../components/Footer';

const displayName = "Private Layout";
const propTypes = {
  children: PropTypes.node.isRequired,
};

function PrivateLayout({ children }) {
  return (
    <Fragment>
      <div style={{ position: "relative" }}>
        <h1>Private</h1>
        <main className="main-container">{children}</main>
        {/*<Nav/>*/}
      </div>
    </Fragment>
  );
}

PrivateLayout.dispatch = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout;
