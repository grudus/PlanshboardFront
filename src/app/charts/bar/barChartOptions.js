export default {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: true,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          userCallback(label) {
            // when the floored value is the same as the value we have a whole number
            return Math.floor(label) === label ? label : null;
          },
        },
      },
    ],
  },
};
