import { FontIcon, TextField } from 'material-ui';
import React, { Component } from 'react';
import { func, bool, string } from './ExtractedPropTypes';

class SearchInput extends Component {
    state = {
      searchText: '',
    };

    onChange = ({ target }) => {
      const searchText = target.value;
      this.setState({ searchText });
      this.props.onSearchChange(searchText);
    };

    render() {
      const iconWidth = 20;

      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontIcon
            style={{ left: `${iconWidth}px` }}
            className="material-icons"
          >search
          </FontIcon>
          <TextField
            label="Search field"
            type="search"
            margin="normal"
            fullWidth={this.props.fullWidth}
            hintText={this.props.hintText}
            value={this.state.searchText}
            hintStyle={{ paddingLeft: `${iconWidth + 5}px` }}
            inputStyle={{ paddingLeft: `${iconWidth + 5}px` }}
            onChange={this.onChange}
          />
        </div>
      );
    }
}

SearchInput.propTypes = {
  onSearchChange: func.isRequired,
  fullWidth: bool,
  hintText: string,
};

SearchInput.defaultProps = {
  fullWidth: true,
  hintText: 'Wyszukaj ...',
};

export default SearchInput;
