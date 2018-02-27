import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { FlatButton, RaisedButton, TextField } from 'material-ui';

class AddGameDialog extends Component {
    static propTypes = {
      show: PropTypes.bool.isRequired,
      onSubmit: PropTypes.func.isRequired,
      onCancel: PropTypes.func.isRequired,
    };

    state = { name: '' };

    preventAndSubmit = (event) => {
      event.preventDefault();
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
          <form onSubmit={this.preventAndSubmit}>
            <TextField
              autoFocus
              floatingLabelText="Nazwa"
              fullWidth
              name="name"
              onChange={this.handleChange}
              errorText={this.props.error}
            />
          </form>
        </Dialog>
      );
    }
}

export default AddGameDialog;
