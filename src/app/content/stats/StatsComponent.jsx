import { muiThemeable } from 'material-ui/styles/index';
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import withTopbar from '../topbar/withTopbar';
import BoardGamesPlaysChart from './charts/BoardGamesPlaysChartComponent';
import './stats.css';
import { getStats } from './statsActions';
import StatsCard from './StatsCardComponent';

class Stats extends Component {
    state = {};

    componentDidMount() {
      this.props.getStats();
    }

    winCount({ playPositionsPerOpponentCount }, userName) {
      if (!playPositionsPerOpponentCount.length) {
        return 0;
      }
      const x = playPositionsPerOpponentCount.find(position => position.opponent.name === userName);
      return x ? x.count : 0;
    }

    render() {
      const { stats, userName } = this.props;
      const winCount = this.winCount(stats, userName);
      return (
        <article className="stats">
          <div className="stats-card-wrapper">
            <StatsCard
              title="Liczba Twoich gier"
              text={stats.boardGamesCount}
            />
            <StatsCard
              title="Liczba rozgrywek"
              text={stats.allPlaysCount}
            />

            <StatsCard
              title="Liczba wygranych rozgrywek"
              text={winCount}
            />
          </div>

          <section className="stats-plays-wrapper">
            <div className="chart-wrapper">
              <BoardGamesPlaysChart
                playsPerBoardGameCount={stats.playsPerBoardGameCount}
                backgroundColor={this.props.muiTheme.palette.accent1Color}
              />
            </div>
            <h2 className="stats-plays-title">Rozgrywki w poszczególnych grach</h2>
          </section>


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
