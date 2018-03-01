import React from 'react';
import PropTypes from 'prop-types';
import './games-table.css';

const GamesTable = ({ games }) => {
  const gamesDom = games.map(game => (
    <tr>
      <td data-label="Data">{game.date.fromNow()}</td>
      <td data-label="Uczestnicy">{game.opponents.sort(a => -a.position).map(a => `(${a.position})${a.name}`).join(', ')}</td>
      <td data-label="Zwycięzca">grudus</td>
      <td data-label="Informacje">{game.info}</td>
    </tr>
  ));


  return (
    <table className="game-table">
      <thead className="game-table-head">
        <tr>
          <th scope="col">Data</th>
          <th scope="col">Uczestnicy</th>
          <th scope="col">Zwycięzca</th>
          <th scope="col">Informacje</th>
        </tr>
      </thead>
      <tbody>
        {gamesDom}
      </tbody>
    </table>
  );
};

const {
  arrayOf, number, object, string, shape,
} = PropTypes;

GamesTable.propTypes = {
  games: arrayOf(shape({
    id: number.isRequired,
    date: object.isRequired,
    info: string,
    opponents: arrayOf(shape({
      position: number.isRequired,
      name: string.isRequired,
    })),
  })).isRequired,
};

export default GamesTable;
