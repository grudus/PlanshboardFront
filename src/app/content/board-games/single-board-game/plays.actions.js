import moment from 'moment/moment';
import { GET_ALL_PLAYS } from './plays.actions.types';

const mockGames = [{
  id: 4,
  date: moment(),
  opponents: [
    { position: 1, name: 'grudus' },
    { position: 2, name: 'madzia' },
    { position: 3, name: 'karwat' },
  ],
}, {
  id: 3,
  date: moment().subtract(3, 'hour'),
  info: 'Kleska konkretna',
  opponents: [
    { position: 2, name: 'grudus' },
    { position: 1, name: 'madzia' },
  ],
}, {
  id: 2,
  date: moment().subtract(2, 'day'),
  info: 'smiesznie bylo',
  opponents: [
    { position: 1, name: 'grudus' },
    { position: 2, name: 'madzia' },
    { position: 3, name: 'golec' },
    { position: 4, name: 'karwat' },
    { position: 5, name: 'Kozioł' },
    { position: 6, name: 'Kasia' },
  ],
},
{
  id: 1,
  date: moment().subtract(3, 'day').subtract(2, 'hour'),
  opponents: [
    { position: 1, name: 'grudus' },
    { position: 2, name: 'madzia' },
    { position: 3, name: 'golec' },
  ],
}];

// eslint-disable-next-line no-unused-vars
export const getAllPlays = boardGameId => (
  { type: GET_ALL_PLAYS, plays: mockGames }
);
