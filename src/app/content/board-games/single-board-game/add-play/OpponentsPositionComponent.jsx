import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PositionItem from './PositionItemComponent';

class OpponentsPosition extends Component {
    state = {};

    onSelect = (opponent, i) => {
      this.props.onPositionChange(opponent, i);
    };

    render() {
      const { opponents } = this.props;
      const opponentsDom = opponents.map(opponent => (
        <li key={opponent.fakeId}>
          <div className="text-center position-item-wrapper ellipsis">
            {opponent.name}
            <PositionItem
              onSelect={i => this.onSelect(opponent, i)}
              positionCount={opponents.length}
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
  opponents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    fakeId: PropTypes.number,
  })),
  onPositionChange: PropTypes.func,
};

OpponentsPosition.defaultProps = {
  opponents: [],
  onPositionChange: () => {
  },
};

export default OpponentsPosition;
