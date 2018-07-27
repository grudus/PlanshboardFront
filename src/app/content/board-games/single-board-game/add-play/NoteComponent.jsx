import React, { Component } from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

class NoteComponent extends Component {
    state = { text: '' };

    onChange = ({ target }) => {
      const text = target.value;
      this.setState({ text });
      this.props.onNoteChange(text);
    };

    render() {
      return (
        <TextField
          multiLine
          fullWidth
          hintText="Brak notatki"
          value={this.state.text}
          onChange={this.onChange}
        />
      );
    }
}

NoteComponent.propTypes = {
  onNoteChange: PropTypes.func.isRequired,
};

export default NoteComponent;
