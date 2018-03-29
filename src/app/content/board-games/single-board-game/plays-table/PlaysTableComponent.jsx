/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './playsTable.css';
import OpponentsCell from './OpponentsCellComponent';
import { dayWithMonth } from '../../../../commons/DateUtils';

const PlaysTable = ({ plays = [], onAddPlayClick }) => {
  const playsSize = plays.length;
  const playsDom = plays.map((play, index) => {
    const sortedResults = play.results.sort((a, b) => (a.position > b.position ? 1 : -1));
    return (
      <tr key={play.id} className="gray-hover pointer">
        <td data-label="Nr">{playsSize - index}.</td>
        <td data-label="Data">{dayWithMonth(play.date)}</td>
        <td data-label="Uczestnicy">
          <OpponentsCell results={sortedResults} />
        </td>
        <td data-label="Zwycięzca"><b>{sortedResults[0].opponentName}</b></td>
        <td data-label="Notatki" className="ellipsis">{play.note}</td>
      </tr>
    );
  });


  return (
    <table className="plays-table card-shadow-always">
      <thead className="plays-table-head">
        <tr>
          <th scope="col" className="opponent-id">Nr</th>
          <th scope="col">Data</th>
          <th scope="col">Uczestnicy</th>
          <th scope="col">Zwycięzca</th>
          <th scope="col">Notatki</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={onAddPlayClick} className="add-play-wrapper">
          <td data-label="Nr" className="add-play-id">{playsSize + 1}.</td>
          <td data-label="Data" colSpan="4" className="add-play card-shadow pointer anim">Dodaj rozgrywkę</td>
        </tr>
        {playsDom}
      </tbody>
    </table>
  );
};

const {
  arrayOf, number, string, shape, func,
} = PropTypes;

PlaysTable.propTypes = {
  onAddPlayClick: func.isRequired,
  plays: arrayOf(shape({
    id: number.isRequired,
    date: string.isRequired,
    note: string,
    results: arrayOf(shape({
      position: number.isRequired,
      opponentName: string.isRequired,
      id: number,
      points: number,
    })),
  })),
};

PlaysTable.defaultProps = {
  plays: [],
};

export default PlaysTable;
