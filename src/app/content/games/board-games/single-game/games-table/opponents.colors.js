const rankingColors = ['#EFBE59', '#A8A8A8', '#935250'];
const restPositionsColors = ['#149370', '#9BB6CF', '#60478B'];

export const findColor = position => (
  position < 4
    ? rankingColors[position - 1]
    : restPositionsColors[position % restPositionsColors.length]
);
