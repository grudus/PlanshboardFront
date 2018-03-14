import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AutoComplete from '../../../../commons/AutoCompleteComponent';
import YesNoButton from '../../../../commons/YesNoButtonsComponent';
import './addPlayDialog.css';
import { getAllOpponents } from '../../../opponents/opponentsActions';
import ResultRow from './ResultRowComponent';

class AddPlayDialog extends Component {
    static propTypes = {
      onCancel: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
    };

    static initialState = {
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
      this.setState(state => ({ ...state, results: [...state.results, newResult] }));
    };


    resultChange = (mapper) => {
      const updatedResults = this.state.results
        .map(mapper);

      this.setState({ results: updatedResults });
    };

    positionChange = (result, position) =>
      this.resultChange(opp => (opp.fakeId === result.fakeId ? { ...result, position } : opp));

    pointsChange = (result, points) =>
      this.resultChange(opp => (opp.fakeId === result.fakeId ? { ...result, points } : opp));


    render() {
      const buttons = <YesNoButton onCancel={this.onRequestClose} onSubmit={this.onSubmit} />;
      const dataSource = this.props.opponents && this.props.opponents.map(o => o.name);

      const resultsDOM = this.state.results.length ? this.state.results.map(result => (
        <ResultRow
          result={result}
          positionCount={this.state.results.length}
          onPositionSelect={this.positionChange}
          onPointsChange={this.pointsChange}
        />
      ))
        : (
          <tr>
            <td colSpan={3} className="text-center table-no-results">Brak uczestników</td>
          </tr>);

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

          <section className="add-play-form flex">

            <table className="w100 add-play-table">

              <tr>
                <th className="p-lr-8">
                  <AutoComplete
                    dataSource={dataSource}
                    onSelect={this.addResult}
                    hintText="Dodaj uczestnika"
                  />
                </th>
                <th>Pozycja:</th>
                <th>Liczba punktów:</th>
              </tr>

              {resultsDOM}

            </table>


            <div className="add-play-form-row">
              <div className="add-play-form-header">Data:</div>
              <div className="add-play-form-content">12 marca</div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-header">Notatki:</div>
              <div className="add-play-form-content">dupa</div>
            </div>
          </section>
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
