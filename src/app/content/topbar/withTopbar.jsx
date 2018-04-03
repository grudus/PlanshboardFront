import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopbarComponent';
import CubeAnimation from '../../commons/animations/LoadingAnimationComponent';

const withTopbar = (WrappedComponent, currentPath) => {
  const Toolbared = (props) => {
    const content = props.theme.loading
      ? (<CubeAnimation />)
      : (
        <Fragment>
          <TopBar currentPath={currentPath} />
          <div style={{ paddingTop: '64px' }} className={props.theme.blur ? 'blur' : ''}>
            <WrappedComponent {...props} />
          </div>
        </Fragment>
      );
    return content;
  };

  const mapStateToProps = ({ theme }) => ({ theme });
  return connect(mapStateToProps)(Toolbared);
};
export default (withTopbar);
