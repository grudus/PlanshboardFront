import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';
import PropTypes from 'prop-types';
import YesNoButton from '../../../../commons/YesNoButtonsComponent';
import './addPlayDialog.scss';
import { getAllOpponents } from '../../../opponents/opponentsActions';
import NoteComponent from './NoteComponent';
import DateDialogComponent from '../../../../commons/DateDialogComponent';
import { utcToday } from '../../../../commons/DateUtils';
import AddPlayResultsTable from './AddPlayResultsTableComponent';

class AddPlayDialog extends Component {
    static propTypes = {
      onCancel: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
    };

    static initialState = {
      date: null,
      note: null,
      results: [],
      fakeId: 1,
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
      const { results, date, note } = this.state;
      await this.props.onSubmit(results, date || utcToday(), note);
      this.props.getOpponents();
    };

    addResult = (value) => {
      const newResult = { opponentName: value, fakeId: this.state.fakeId };
      const existingOpponent = this.props.opponents.find(o => o.name === value);
      if (existingOpponent) newResult.opponentId = existingOpponent.id;
      this.setState(state => ({
        ...state,
        fakeId: state.fakeId + 1,
        results: [...state.results, newResult],
      }));
    };


    resultChange = (mapper) => {
      this.setState((state) => {
        const results = state.results
          .map(mapper);
        return ({ results });
      });
    };

    positionChange = (result, position) => this.resultChange(opp => (opp.fakeId === result.fakeId ? {
      ...result,
      position,
    } : opp));

    pointsChange = (result, points) => this.resultChange(opp => (opp.fakeId === result.fakeId ? {
      ...result,
      points,
    } : opp));

    dateChange = (date) => {
      this.setState({ date });
    };

    noteChange = (note) => {
      this.setState({ note });
    };

    render() {
      const buttons = (
        <YesNoButton
          onCancel={this.onRequestClose}
          onSubmit={this.onSubmit}
          isDisabled={!this.state.results.length}
        />
      );

      return (
        <Dialog
          title="Dodaj rozgrywkę"
          actions={buttons}
          modal
          open={this.props.show}
          bodyClassName="global--modal-body"
          contentClassName="global--modal-content"
          paperClassName="global--modal-paper"
          autoScrollBodyContent
          autoDetectWindowHeight={false}
          onRequestClose={this.onRequestClose}
        >

          <article className="add-play-form flex">

            <AddPlayResultsTable
              positionChange={this.positionChange}
              pointsChange={this.pointsChange}
              addResult={this.addResult}
              opponents={this.props.opponents}
              results={this.state.results}
            />

            <section className="add-play-form-row">
              <div className="add-play-form-header">Notatki:</div>
              <div className="add-play-form-content">
                <NoteComponent onNoteChange={this.noteChange} />
              </div>
            </section>


            <section className="add-play-form-row">
              <div className="add-play-form-header">Data:</div>
              <div className="add-play-form-content">
                <DateDialogComponent onDateChange={this.dateChange} />
              </div>
            </section>

          </article>
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
