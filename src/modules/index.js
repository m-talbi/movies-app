import renderMovies from './AppComponents/displayMovies';
import getShowByName from './TvMazeService/TvMazeService';

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
  'Seal Team'
];

const showReqs = showNames.map((name) => getShowByName(name));

Promise.all(showReqs).then((res) => renderMovies(res));