import React, { Component } from 'react';
import { muiThemeable } from 'material-ui/styles/index';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

class NoteComponent extends Component {
    state = { text: '' };

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
          hintText="Brak notatki"
          hintStyle={{ color: this.props.muiTheme.palette.hintColor }}
          value={this.state.text}
          onChange={this.pointsChange}
        />
      );
    }
}

NoteComponent.propTypes = {
  onNoteChange: PropTypes.func.isRequired,
};

export default muiThemeable()(NoteComponent);
