import React from 'react';
import { connect } from 'react-redux';

const User = props => (
  <div>
    <span>User:</span>
    <span>{props.user.name}</span>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(User);
