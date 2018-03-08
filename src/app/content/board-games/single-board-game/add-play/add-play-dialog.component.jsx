import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import PropTypes from 'prop-types';
import YesNoButton from '../../../../commons/yes-no-buttons.component';

export class AddPlayDialog extends Component {
    static propTypes = {
      onCancel: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
    };

    state = {};

    render() {
      const buttons = <YesNoButton onCancel={this.props.onCancel} onSubmit={this.props.onSubmit} />;


      return (
        <Dialog
          title="Dodaj rozgrywkę"
          actions={buttons}
          modal={false}
          open={this.props.show}
          onRequestClose={this.props.onCancel}
        >
          <div>
                    Dupa
          </div>
        </Dialog>
      );
    }
}
