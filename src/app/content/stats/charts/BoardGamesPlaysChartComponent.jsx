import React from 'react';
import {
  arrayOf, number, shape, string,
} from '../../../commons/ExtractedPropTypes';
import BarChart from '../../../charts/bar/BarChartComponent';


const BoardGamesPlaysChart = ({ playsPerBoardGameCount, backgroundColor }) => {
  const labels = playsPerBoardGameCount.map(play => play.boardGame.name);
  const chartData = playsPerBoardGameCount.map(play => play.count);

  const data = {
    labels,
    datasets: [{
      label: 'Iloś rozgrywek w grze',
      backgroundColor,
      data: chartData,
    }],
  };
  return <BarChart data={data} />;
};

BoardGamesPlaysChart.propTypes = {
  playsPerBoardGameCount: arrayOf(shape({
    boardGame: shape({
      name: string,
    }),
    count: number,
  })).isRequired,
  backgroundColor: string.isRequired,
};


export default BoardGamesPlaysChart;
