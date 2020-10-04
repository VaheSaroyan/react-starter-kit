// import libs
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import components

const displayName = 'Public Layout';
const propTypes = {
  children: PropTypes.node.isRequired,
};

function PublicLayout({ children }) {
  return (
    <Fragment>
      <main className="main-container">{children}</main>
    </Fragment>
  );
}

PublicLayout.dispatch = displayName;
PublicLayout.propTypes = propTypes;

export default PublicLayout;
