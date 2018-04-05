import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PositionItem extends Component {
    static propTypes = {
      onSelect: PropTypes.func.isRequired,
      positionCount: PropTypes.number.isRequired,
    };

    state = { selectedItem: -1 };

    select = (i) => {
      const clickOnCurrentlySelected = this.state.selectedItem === i;

      if (clickOnCurrentlySelected) {
        this.setState({ selectedItem: -1 });
      } else {
        this.setState({ selectedItem: i });
      }
      this.props.onSelect(i);
    };


    render() {
      const { positionCount } = this.props;
      const positions = [...Array(positionCount).keys()].map(i => i + 1)
        .map((i) => {
          const className = `${i === this.state.selectedItem ? 'selected' : ''}`;
          return (
            <li
              key={i}
              className={`position-item text-center ${className}`}
              onClick={() => this.select(i)}
            >
              {i}
            </li>
          );
        });

      return (
        <ul className="flex just-center position-item-ul">
          {positions}
        </ul>
      );
    }
}


export default PositionItem;
