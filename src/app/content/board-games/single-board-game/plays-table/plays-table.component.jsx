/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './plays-table.css';
import OpponentsCell from './opponents-cell.component';

const PlaysTable = ({ plays, onAddPlayClick }) => {
  const playsDom = plays.map((play) => {
    const sortedOpponents = play.opponents.sort((a, b) => (a.position > b.position ? 1 : -1));
    return (
      <tr>
        <td data-label="Nr">{play.id}.</td>
        <td data-label="Data">{play.date.fromNow()}</td>
        <td data-label="Uczestnicy">
          <OpponentsCell opponents={sortedOpponents} />
        </td>
        <td data-label="Zwycięzca"><b>{sortedOpponents[0].name}</b></td>
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
  arrayOf, number, object, string, shape, func,
} = PropTypes;

PlaysTable.propTypes = {
  onAddPlayClick: func.isRequired,
  plays: arrayOf(shape({
    id: number.isRequired,
    date: object.isRequired,
    info: string,
    opponents: arrayOf(shape({
      position: number.isRequired,
      name: string.isRequired,
    })),
  })).isRequired,
};

export default PlaysTable;