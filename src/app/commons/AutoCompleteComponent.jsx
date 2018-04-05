/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';
import PropTypes from 'prop-types';

class AutoCompleteComponent extends Component {
    state = { text: '' };


    onEnterAndAddFocus = () => {
      this.props.onSelect(this.state.text);
      this.setState({ text: '' });
      this.autoCompleteInput.focus();
    };

    updateAutoComplete = (value) => {
      this.setState({ text: value });
    };


    render() {
      const {
        dataSource, hintText, fullWidth, filter,
      } = this.props;

      return (
        <AutoComplete
          filter={filter}
          dataSource={dataSource}
          onNewRequest={this.onEnterAndAddFocus}
          searchText={this.state.text}
          onUpdateInput={this.updateAutoComplete}
          ref={(input) => { this.autoCompleteInput = input; }}
          hintText={hintText}
          fullWidth={fullWidth}
        />
      );
    }
}

AutoCompleteComponent.propTypes = {
  onSelect: PropTypes.func.isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.string).isRequired,
  fullWidth: PropTypes.bool,
  hintText: PropTypes.string,
  filter: PropTypes.func,
};

AutoCompleteComponent.defaultProps = {
  fullWidth: true,
  hintText: '',
  filter: (searchText, key) => key.toLowerCase().includes(searchText.toLowerCase()),
};

export default AutoCompleteComponent;
