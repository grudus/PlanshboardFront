import React, { Fragment } from 'react';
import TopBar from './topbar.component';

export const withTopbar = (WrappedComponent, currentPath) => props =>
  (
    <Fragment>
      <TopBar currentPath={currentPath} />
      <div style={{ paddingTop: '64px' }}>
        <WrappedComponent {...props} />
      </div>
    </Fragment>
  );

