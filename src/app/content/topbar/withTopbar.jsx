import React, { Fragment } from 'react';
import TopBar from './TopbarComponent';

export const withTopbar = (WrappedComponent, currentPath) => props =>
  (
    <Fragment>
      <TopBar currentPath={currentPath} />
      <div style={{ paddingTop: '64px' }}>
        <WrappedComponent {...props} />
      </div>
    </Fragment>
  );

