import React, { Component } from 'react';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { muiThemeable } from 'material-ui/styles/index';
import withTopbar from '../topbar/withTopbar';
import { getStats } from './statsActions';
import './stats.css';
import StatsCard from './StatsCardComponent';

class Stats extends Component {
    state = {};

    componentDidMount() {
      this.props.getStats();
    }


    render() {
      const { stats, userName } = this.props;
      const { playPositionsPerOpponentCount } = stats;
      const winCount = playPositionsPerOpponentCount.length
        ? playPositionsPerOpponentCount.find(position => position.opponent.name === userName).count
        : 0;
      return (
        <article className="stats">
          <StatsCard
            className="grid-area-a"
            title="Liczba Twoich gier"
            text={stats.boardGamesCount}
          />
          <StatsCard
            className="grid-area-b"
            title="Liczba rozgrywek"
            text={stats.allPlaysCount}
          />

          <StatsCard
            className="grid-area-c"
            title="Liczba wygranych rozgrywek"
            text={winCount}
          />
        </article>
      );
    }
}


const mapStateToProps = ({ stats, user }) => ({
  stats,
  userName: user.name,
});

const mapDispatchToProps = {
  getStats,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  muiThemeable(),
)(withTopbar(Stats, '/stats'));
