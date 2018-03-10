import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import YesNoButton from '../../../../commons/YesNoButtonsComponent';
import './addPlayDialog.css';

export class AddPlayDialog extends Component {
    static propTypes = {
      onCancel: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
    };

    static initialState = {
      autoCompleteText: '',
      dataSource: ['madzia', 'mama', 'martyna', 'grudus', 'Kozioł', 'Karwat'],
      opponents: [],
    };

    state = { ...AddPlayDialog.initialState };


    onRequestClose = () => {
      this.setState({ ...AddPlayDialog.initialState });
      this.props.onCancel();
    };

    onSubmit = () => {
      this.setState({ ...AddPlayDialog.initialState });
      this.props.onSubmit();
    };

    addOpponent = (value) => {
      const newOpponent = { name: value, position: this.state.opponents.length + 1 };
      this.setState(state => ({ ...state, autoCompleteText: '', opponents: [...state.opponents, newOpponent] }));
    };

    updateAutoComplete = (value) => {
      this.setState({ autoCompleteText: value });
    };


    render() {
      const buttons = <YesNoButton onCancel={this.onRequestClose} onSubmit={this.onSubmit} />;


      return (
        <Dialog
          title="Dodaj rozgrywkę"
          actions={buttons}
          modal={false}
          open={this.props.show}
          onRequestClose={this.onRequestClose}
        >
          <div className="add-play-form">
            <div className="add-play-form-row">
              <div className="add-play-form-label">
                            Uczestnicy:
              </div>
              <div className="add-play-form-content">
                <AutoComplete
                  dataSource={this.state.dataSource}
                  onNewRequest={this.addOpponent}
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
              <div className="add-play-form-content">{this.state.opponents.map(a => a.name).join(' ')}</div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-label">Liczba punktów:</div>
              <div className="add-play-form-content">{this.state.opponents.map(a => a.name).join(' ')}</div>
            </div>
            <div className="add-play-form-row">
              <div className="add-play-form-label">Zwycięzca:</div>
              <div className="add-play-form-content">{this.state.opponents.map(a => a.name).join(' ')}</div>
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
