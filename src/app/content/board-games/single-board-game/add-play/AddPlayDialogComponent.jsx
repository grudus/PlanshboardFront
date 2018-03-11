import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import YesNoButton from '../../../../commons/YesNoButtonsComponent';
import './addPlayDialog.css';
import OpponentsPosition from './OpponentsPositionComponent';
import { getAllOpponents } from '../../../opponents/opponentsActions';

class AddPlayDialog extends Component {
    static propTypes = {
      onCancel: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
    };

    static initialState = {
      autoCompleteText: '',
      results: [],
    };

    state = { ...AddPlayDialog.initialState };

    componentDidMount() {
      this.props.getOpponents();
    }

    onRequestClose = () => {
      this.setState({ ...AddPlayDialog.initialState });
      this.props.onCancel();
    };

    onSubmit = async () => {
      this.setState({ ...AddPlayDialog.initialState });
      await this.props.onSubmit(this.state.results);
      this.props.getOpponents();
    };

    addResult = (value) => {
      const newResult = { opponentName: value, fakeId: this.state.results.length + 1 };
      const existingOpponent = this.props.opponents.find(o => o.name === value);
      if (existingOpponent)
        newResult.opponentId = existingOpponent.id;
      this.setState(state => ({ ...state, autoCompleteText: '', results: [...state.results, newResult] }));
    };

    updateAutoComplete = (value) => {
      this.setState({ autoCompleteText: value });
    };

    opponentChange = (opponent, position) => {
      const updatedOpponents = this.state.results
        .map(opp => (opp.fakeId === opponent.fakeId ? { ...opponent, position } : opp));

      this.setState({ results: updatedOpponents });
    };


    render() {
      const buttons = <YesNoButton onCancel={this.onRequestClose} onSubmit={this.onSubmit} />;
      const dataSource = this.props.opponents && this.props.opponents.map(o => o.name);

      return (
        <Dialog
          title="Dodaj rozgrywkę"
          actions={buttons}
          modal={false}
          open={this.props.show}
          autoScrollBodyContent
          autoDetectWindowHeight
          onRequestClose={this.onRequestClose}
        >
          <div className="add-play-form">
            <div className="add-play-form-row">
              <div className="add-play-form-label">
                            Uczestnicy:
              </div>
              <div className="add-play-form-content">
                <AutoComplete
                  dataSource={dataSource}
                  onNewRequest={this.addResult}
                  searchText={this.state.autoCompleteText}
                  onUpdateInput={this.updateAutoComplete}
                  hintText="Dodaj przeciwnika"
                  fullWidth
                />
              </div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-label">
                            Miejsce (pozycja):
              </div>
              <div className="add-play-form-content">
                <OpponentsPosition
                  results={this.state.results}
                  onPositionChange={this.opponentChange}
                />
              </div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-label">Liczba punktów:</div>
              <div className="add-play-form-content">{this.state.results.map(a => a.opponentName).join(' ')}</div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-label">Zwycięzca:</div>
              <div className="add-play-form-content">{this.state.results.map(a => a.opponentName).join(' ')}</div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-label">Notatki:</div>
              <div className="add-play-form-content">dupa</div>
            </div>
          </div>
        </Dialog>
      );
    }
}

const mapStateToProps = ({ opponents }) => ({
  opponents,
});
const mapDispatchToProps = {
  getOpponents: getAllOpponents,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayDialog);