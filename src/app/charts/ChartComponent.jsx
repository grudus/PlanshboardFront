/* eslint-disable react/no-string-refs,react/no-did-mount-set-state,react/forbid-prop-types */
import React, { Component } from 'react';
import Chart from '../../../node_modules/chart.js/src/chart';
import { array, shape, string } from '../commons/ExtractedPropTypes';

class MyChart extends Component {
    static propTypes = {
      type: string.isRequired,
      options: shape().isRequired,
      data: shape({
        datasets: array,
        labels: array,
      }).isRequired,
    };

    state = { chart: null };

    componentDidMount() {
      const chartCanvas = this.refs.chart;

      const myChart = new Chart(chartCanvas, {
        type: this.props.type,
        data: this.props.data,
        options: this.props.options,
      });

      this.setState({ chart: myChart });
    }

    componentDidUpdate() {
      const { chart } = this.state;
      const { data } = this.props;

      data.datasets.forEach((dataset, i) => {
        chart.data.datasets[i].data = dataset.data;
      });

      chart.data.labels = data.labels;
      chart.update();
    }

    render() {
      return (
        <canvas ref="chart" />
      );
    }
}

export default MyChart;
