import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'material-ui';
import ResultRow from './ResultRowComponent';


const AddPlayResultsTable = (props) => {
  const size = props.results.length;

  const resultsDOM = size ? props.results.map(result => (
    <ResultRow
      result={result}
      positionCount={size}
      onPositionSelect={props.positionChange}
      onPointsChange={props.pointsChange}
    />
  ))
    : (
      <tr>
        <td colSpan={3} className="text-center table-no-results">Brak uczestników</td>
      </tr>);

  return (
    <table className="w100 add-play-table">
      <tr>
        <th className="p-lr-8">
          <AutoComplete
            dataSource={props.autoCompleteTexts}
            onSelect={props.addResult}
            hintText="Dodaj uczestnika"
          />
        </th>
        <th>Pozycja:</th>
        <th>Liczba punktów:</th>
      </tr>

      {resultsDOM}

    </table>
  );
};

AddPlayResultsTable.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    opponentName: PropTypes.string.isRequired,
  })),
  positionChange: PropTypes.func.isRequired,
  pointsChange: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
  autoCompleteTexts: PropTypes.arrayOf(PropTypes.string),
};

AddPlayResultsTable.defaultProps = {
  results: [],
  autoCompleteTexts: [],
};

export default AddPlayResultsTable;
