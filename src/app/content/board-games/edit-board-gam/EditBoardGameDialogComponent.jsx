import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm } from 'react-form-validator-core';
import { Dialog } from 'material-ui';
import { TextValidator } from 'react-material-ui-form-validator';
import YesNoButton from '../../../commons/YesNoButtonsComponent';

class EditBoardGameDialog extends Component {
    static propTypes = {
      show: PropTypes.bool.isRequired,
      onSubmit: PropTypes.func.isRequired,
      onCancel: PropTypes.func.isRequired,
      isError: PropTypes.bool,
      name: PropTypes.string,
    };

    static defaultProps = {
      isError: false,
      name: '',
    };

    state = { newName: this.props.name };

    componentWillReceiveProps(props) {
      if (!props.isError) this.setState({ newName: props.name });
    }

    preventAndSubmit = (event) => {
      event.preventDefault();
      if (this.state.newName) this.props.onSubmit(this.state.newName);
    };

    handleChange = (event) => {
      this.setState({ newName: event.target.value });
    };

    render() {
      const buttons = (
        <YesNoButton
          onCancel={this.props.onCancel}
          onSubmit={this.preventAndSubmit}
          submitText="Zmień"
        />
      );

      return (
        <Dialog
          title="Zmień nazwę"
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
              value={this.state.newName}
              onChange={this.handleChange}
              errorText={this.props.isError && 'Taka gra już istnieje'}
            />
          </ValidatorForm>
        </Dialog>
      );
    }
}

export default EditBoardGameDialog;
