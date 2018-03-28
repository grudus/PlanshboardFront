import React, { Component } from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

class NoteComponent extends Component {
    state = { text: 'dupa' };

    pointsChange = ({ target }) => {
      const text = target.value;
      this.setState({ text });
      this.props.onNoteChange(text);
    };

    render() {
      return (
        <TextField
          multiLine
          fullWidth
          value={this.state.text}
          onChange={this.pointsChange}
        />
      );
    }
}

NoteComponent.propTypes = {
  onNoteChange: PropTypes.func.isRequired,
};

export default NoteComponent;
