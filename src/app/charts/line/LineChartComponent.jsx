import React from 'react';
import PropTypes from 'prop-types';
import options from './lineChartOptions';
import ChartComponent from '../ChartComponent';
import { array } from '../../commons/ExtractedPropTypes';

const LineChart = ({ data }) => (
  <ChartComponent
    data={data}
    options={options}
    type="line"
  />
);

LineChart.propTypes = {
  data: PropTypes.shape({
    datasets: array,
    labels: array,
  }).isRequired,
};

export default LineChart;
