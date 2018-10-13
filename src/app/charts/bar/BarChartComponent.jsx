import React from 'react';
import PropTypes from 'prop-types';
import options from './barChartOptions';
import ChartComponent from '../ChartComponent';
import { array } from '../../commons/ExtractedPropTypes';

const BarChart = ({ data }) => (
  <ChartComponent
    data={data}
    options={options}
    type="horizontalBar"
  />
);

BarChart.propTypes = {
  data: PropTypes.shape({
    datasets: array,
    labels: array,
  }).isRequired,
};

export default BarChart;
