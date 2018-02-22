import React, { Fragment } from 'react';
import TopBar from './topbar.component';

export const withTopbar = (WrappedComponent, path) => props =>
  (
    <Fragment>
      <TopBar pathName={path} />
      <div style={{ paddingTop: '64px' }}>
        <WrappedComponent {...props} />
      </div>
    </Fragment>
  );

