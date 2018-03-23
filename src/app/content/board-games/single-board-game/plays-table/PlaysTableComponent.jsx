/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './playsTable.css';
import OpponentsCell from './OpponentsCellComponent';

const PlaysTable = ({ plays = [], onAddPlayClick }) => {
  const playsDom = plays.map((play) => {
    const sortedResults = play.results.sort((a, b) => (a.position > b.position ? 1 : -1));
    return (
      <tr key={play.id}>
        <td data-label="Nr">{play.id}.</td>
        <td data-label="Data">{moment(play.date).format('DD MMMM')}</td>
        <td data-label="Uczestnicy">
          <OpponentsCell results={sortedResults} />
        </td>
        <td data-label="Zwycięzca"><b>{sortedResults[0].opponentName}</b></td>
        <td data-label="Notatki">{play.info}</td>
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
          <td data-label="Nr" className="add-play-id">5.</td>
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
    info: string,
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
