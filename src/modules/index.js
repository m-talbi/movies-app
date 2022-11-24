import renderMovies from './AppComponents/displayMovies.js';
import getShowByName from './TvMazeService/TvMazeService.js';

const showNames = [
  'Vikings',
  'The last kingdom',
  'Breaking bad',
  'The Witcher',
  'Game of thrones',
  'Outlander',
  'Chernobyl',
  'Better call saul',
  'House of the dragon',
  'Sons of anarchy',
  'Peaky blinders',
  'Arcane',
  '1899',
  'La casa de papel',
  'The 100',
  'Loki',
  'Seal Team',
  'Chuck',
  'Silicon Valley',
  'Nikita',
];

const showReqs = showNames.map((name) => getShowByName(name));
Promise.all(showReqs).then((res) => renderMovies(res));