/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';
import { muiThemeable } from 'material-ui/styles/index';

class MaterialTextField extends Component {
  static propTypes = {
    reference: PropTypes.any,
    floatingLabelText: PropTypes.string,
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    errorText: PropTypes.string,
  };

  static defaultProps = {
    reference: () => {},
    floatingLabelText: '',
    fullWidth: false,
    type: 'text',
    name: '',
    value: '',
    onChange: () => {},
    errorText: '',
  };

  render() {
    return (
      <TextField
        ref={this.props.reference}
        floatingLabelText={this.props.floatingLabelText}
        fullWidth={this.props.fullWidth}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        errorText={this.props.errorText}
        floatingLabelStyle={{ color: this.props.muiTheme.palette.hintColor }}
        floatingLabelFocusStyle={{ color: this.props.muiTheme.palette.primary1Color }}
        inputStyle={{ caretColor: this.props.muiTheme.palette.textColor }}
      />
    );
  }
}

export default muiThemeable()(MaterialTextField);
