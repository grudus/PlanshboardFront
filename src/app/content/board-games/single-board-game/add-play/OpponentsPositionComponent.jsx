import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PositionItem from './PositionItemComponent';

class OpponentsPosition extends Component {
    state = {};

    onSelect = (opponent, i) => {
      this.props.onPositionChange(opponent, i);
    };

    render() {
      const { results } = this.props;
      const opponentsDom = results.map(result => (
        <li key={result.fakeId}>
          <div className="text-center position-item-wrapper ellipsis">
            {result.opponentName}
            <PositionItem
              onSelect={i => this.onSelect(result, i)}
              positionCount={results.length}
            />
          </div>
        </li>
      ));

      return (
        <ul className="opponents-position">
          {opponentsDom}
        </ul>
      );
    }
}

OpponentsPosition.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    opponentName: PropTypes.string,
    id: PropTypes.number,
    fakeId: PropTypes.number,
  })).isRequired,
  onPositionChange: PropTypes.func.isRequired,
};

export default OpponentsPosition;
