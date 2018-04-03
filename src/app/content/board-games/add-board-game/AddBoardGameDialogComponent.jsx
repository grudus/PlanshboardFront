import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import YesNoButton from '../../../commons/YesNoButtonsComponent';
import MaterialDialog from '../../../commons/dialog/MaterialDialog';

class AddBoardGameDialog extends Component {
    static propTypes = {
      show: PropTypes.bool.isRequired,
      onSubmit: PropTypes.func.isRequired,
      onCancel: PropTypes.func.isRequired,
      isError: PropTypes.bool,
    };

    static defaultProps = {
      isError: false,
    };

    state = { name: '' };

    preventAndSubmit = (event) => {
      event.preventDefault();
      if (this.state.name)
        this.props.onSubmit(this.state.name, () => this.setState({ name: '' }));
    };

    handleChange = (event) => {
      this.setState({ name: event.target.value });
    };

    render() {
      const buttons = (<YesNoButton
        onCancel={this.props.onCancel}
        onSubmit={this.preventAndSubmit}
      />);

      return (
        <MaterialDialog
          title="Dodaj nową grę"
          actions={buttons}
          modal={false}
          open={this.props.show}
          onRequestClose={this.props.onCancel}
        >
          <ValidatorForm onSubmit={this.preventAndSubmit}>
            <TextValidator
              autoFocus
              floatingLabelText="Nazwa"
              fullWidth
              validators={['required']}
              errorMessages={['Pole jest wymagane']}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              errorText={this.props.isError && 'Taka gra już istnieje'}
            />
          </ValidatorForm>
        </MaterialDialog>
      );
    }
}

export default AddBoardGameDialog;
