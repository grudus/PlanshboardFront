import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField } from 'material-ui';
import PositionItem from './PositionItemComponent';

class ResultRow extends Component {
    state = { text: '' };

    pointsChange = (event) => {
      const text = event.target.value;
      this.setState({ text });
      this.props.onPointsChange(this.props.result, Number(text));
    };

    render() {
      const { result, positionCount, onPositionSelect } = this.props;
      return (
        <tr>
          <td className="text-center ellipsis">{result.opponentName}</td>
          <td>
            <PositionItem
              onSelect={i => onPositionSelect(result, i)}
              positionCount={positionCount}
            />
          </td>
          <td>
            <TextField
              type="number"
              floatingLabelText="Punkty"
              fullWidth
              value={this.state.text}
              // ugly af, but needs to fit to the row
              style={{ height: '35px', marginTop: '5px' }}
              floatingLabelStyle={{ marginTop: '-35px' }}
              inputStyle={{ marginTop: '-35px' }}
              onChange={this.pointsChange}
            />
          </td>
        </tr>
      );
    }
}

ResultRow.propTypes = {
  result: PropTypes.shape({
    opponentName: PropTypes.string.isRequired,
  }).isRequired,
  positionCount: PropTypes.number.isRequired,
  onPositionSelect: PropTypes.func.isRequired,
  onPointsChange: PropTypes.func.isRequired,
};

export default ResultRow;
