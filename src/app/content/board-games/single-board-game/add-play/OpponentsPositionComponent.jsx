import React, { Component } from 'react';
import {
  arrayOf, string, number, func, shape,
} from '../../../../commons/ExtractedPropTypes';
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
  results: arrayOf(shape({
    opponentName: string,
    id: number,
    fakeId: number,
  })).isRequired,
  onPositionChange: func.isRequired,
};

export default OpponentsPosition;
