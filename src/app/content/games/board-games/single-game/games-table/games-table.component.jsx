import React from 'react';
import PropTypes from 'prop-types';
import './games-table.css';
import OpponentsCell from './opponents-cell.component';

const GamesTable = ({ games }) => {
  const gamesDom = games.map((game) => {
    const sortedOpponents = game.opponents.sort((a, b) => (a.position > b.position ? 1 : -1));
    return (
      <tr>
        <td data-label="Nr">{game.id}.</td>
        <td data-label="Data">{game.date.fromNow()}</td>
        <td data-label="Uczestnicy">
          <OpponentsCell opponents={sortedOpponents} />
        </td>
        <td data-label="Zwycięzca"><b>{sortedOpponents[0].name}</b></td>
        <td data-label="Notatki">{game.info}</td>
      </tr>
    );
  });


  return (
    <table className="game-table card-shadow-always">
      <thead className="game-table-head">
        <tr>
          <th scope="col" className="opponent-id">Nr</th>
          <th scope="col">Data</th>
          <th scope="col">Uczestnicy</th>
          <th scope="col">Zwycięzca</th>
          <th scope="col">Notatki</th>
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
