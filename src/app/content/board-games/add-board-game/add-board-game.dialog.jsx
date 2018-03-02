import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { FlatButton, RaisedButton } from 'material-ui';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

class AddGameDialog extends Component {
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
        this.props.onSubmit(this.state.name);
    };

    handleChange = (event) => {
      this.setState({ name: event.target.value });
    };

    render() {
      const buttons = [
        <FlatButton
          label="Cofnij"
          primary
          onClick={this.props.onCancel}
        />,
        <RaisedButton
          type="submit"
          label="Stwórz"
          primary
          onClick={this.preventAndSubmit}
        />,
      ];
      return (
        <Dialog
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
              onChange={this.handleChange}
              errorText={this.props.isError && 'Taka gra już istnieje'}
            />
          </ValidatorForm>
        </Dialog>
      );
    }
}

export default AddGameDialog;
