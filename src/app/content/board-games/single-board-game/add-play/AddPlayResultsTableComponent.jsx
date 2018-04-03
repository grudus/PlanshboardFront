import React from 'react';
import PropTypes from 'prop-types';
import { muiThemeable } from 'material-ui/styles/index';
import AutoComplete from '../../../../commons/AutoCompleteComponent';
import ResultRow from './ResultRowComponent';
import './addPlayDialog.css';


const AddPlayResultsTable = (props) => {
  const size = props.results.length;
  const resultsDOM = size ? props.results.map(result => (
    <ResultRow
      key={result.fakeId}
      result={result}
      positionCount={size}
      onPositionSelect={props.positionChange}
      onPointsChange={props.pointsChange}
    />
  ))
    : (
      <tr>
        <td className="text-center table-no-results">Brak uczestników</td>
        <td />
        <td />
      </tr>);

  const dataSource = props.opponents.map(o => o.name);

  return (

    <table className="w100 add-play-table">
      <tbody className="text">
        <tr className="add-play-table-header">
          <th className="p-lr-8">
            <AutoComplete
              dataSource={dataSource}
              onSelect={props.addResult}
              hintText="Dodaj uczestnika"
            />
          </th>
          <th>Pozycja:</th>
          <th>Liczba punktów:</th>
        </tr>

        {resultsDOM}
      </tbody>
    </table>
  );
};

AddPlayResultsTable.propTypes = {
  positionChange: PropTypes.func.isRequired,
  pointsChange: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    fakeId: PropTypes.number,
    opponentName: PropTypes.string.isRequired,
  })),
  opponents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

AddPlayResultsTable.defaultProps = {
  results: [],
  opponents: [],
};

export default muiThemeable()(AddPlayResultsTable);
