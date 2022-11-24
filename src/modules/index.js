import displayLikes from './AppComponents/displayLikes.js';
import renderMovies from './AppComponents/displayMovies.js';
import { getLikes } from './InvolvementService/LikeService.js';
import { getShowByName } from './TvMazeService/TvMazeService.js';

const showNames = [
  'Homeland',
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

const showLikes = getLikes();
const showReqs = showNames.map((name) => getShowByName(name));

Promise.all([Promise.all(showReqs), showLikes])
  .then((res) => {
    renderMovies(res[0]);
    displayLikes(res[1]);
  });