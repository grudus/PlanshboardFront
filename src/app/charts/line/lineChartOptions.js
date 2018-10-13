const gridColor = 'rgba(200, 200, 200, 0.1)';
const tickColor = 'rgba(200, 200, 200, 0.5)';

export default {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: true,
  },
  showTooltips: true,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {

        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          fontColor: tickColor,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: gridColor,
          zeroLineColor: gridColor,
          tickMarkLength: 20,
          drawBorder: false,
        },
        ticks: {
          fontColor: tickColor,
          padding: 40,
          beginAtZero: true,
          userCallback(label) {
            // when the floored value is the same as the value we have a whole number
            if (Math.floor(label) === label) {
              return label;
            }
            return undefined;
          },
        },
      },
    ],
  },
};
