import React from 'react';
import FlipMove from 'react-flip-move';
import './playsTable.css';
import OpponentsCell from './OpponentsCellComponent';
import { arrayOf, number, string, shape, func } from '../../../../commons/ExtractedPropTypes';
import { dateFormat } from '../../../../commons/DateUtils';

const PlaysTable = ({ plays = [], onAddPlayClick, onPlayRowClick }) => {
  const playsSize = plays.length;
  const playsDom = plays.map((play, index) => {
    const sortedResults = play.results.sort((a, b) => (a.position > b.position ? 1 : -1));
    return (
      <tr key={play.id} onClick={() => onPlayRowClick(play)}>
        <td data-label="Nr">{playsSize - index}.</td>
        <td data-label="Data">{dateFormat(play.date)}</td>
        <td data-label="Uczestnicy" className="play-table-opponents-wrapper">
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
          <th scope="col" className="play-table-date">Data</th>
          <th scope="col">Uczestnicy</th>
          <th scope="col" className="play-table-winner">Zwycięzca</th>
          <th scope="col">Notatki</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={onAddPlayClick} className="add-play-wrapper">
          <td data-label="Nr" className="add-play-id">{playsSize + 1}.</td>
          <td data-label="Data" colSpan="4" className="add-play card-shadow pointer anim add">Dodaj rozgrywkę</td>
        </tr>
        <FlipMove enterAnimation="fade" staggerDelayBy={25} leaveAnimation={null} easing="ease-in" typeName={null}>
          {playsDom}
        </FlipMove>
      </tbody>
    </table>
  );
};

PlaysTable.propTypes = {
  onAddPlayClick: func.isRequired,
  onPlayRowClick: func.isRequired,
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
