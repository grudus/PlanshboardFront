import React from 'react';
import {
  shape, number, string, func, arrayOf,
} from '../../../../commons/ExtractedPropTypes';
import AutoComplete from '../../../../commons/AutoCompleteComponent';
import ResultRow from './ResultRowComponent';
import './addPlayDialog.scss';


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
  positionChange: func.isRequired,
  pointsChange: func.isRequired,
  addResult: func.isRequired,
  results: arrayOf(shape({
    fakeId: number,
    opponentName: string.isRequired,
  })),
  opponents: arrayOf(shape({
    name: string,
  })),
};

AddPlayResultsTable.defaultProps = {
  results: [],
  opponents: [],
};

export default AddPlayResultsTable;
