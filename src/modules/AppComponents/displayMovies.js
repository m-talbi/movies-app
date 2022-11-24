import mapShowDto from '../Helpers/createShowObj.js';
import { AddLike, getLikes } from '../InvolvementService/LikeService.js';
import { getShowById } from '../TvMazeService/TvMazeService.js';
import displayLikes from './displayLikes.js';
import renderCommentPopup from './displayPopUp.js';
 
const generateGenres = (genresList) => genresList.reduce((List, genre) => `${List}<li>${genre}</li>`, '');
 
const generateMovie = (movie) => `
  <article id=${movie.id} class="movie-card">
    <img src="${movie.image.medium}" class="card-img" alt="movie image" />
    <div class="card-footer">
      <h3 class="movie-title">${movie.name}</h3>
      <ul class="movie-tags">
        ${generateGenres(movie.genres)}
      </ul>
      <div class="action">
        <button class="card-btn">See more</button>
        <div class="likes-container">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  </article>
`;
 
const renderMovies = async (movies) => {
  const moviesContainer = document.querySelector('.movies-list');
  movies.forEach((movie) => {
    moviesContainer.insertAdjacentHTML('beforeend', generateMovie(movie));
    const addedShow = moviesContainer.lastElementChild;
 
    const movieId = addedShow.id;
    const likeBtn = addedShow.querySelector('.fa-heart');
    const openPopupBtn = addedShow.querySelector('button');
    let showLikesEl = addedShow.querySelector('.likes');
 
    likeBtn.addEventListener('click', async () => {
      await AddLike(movieId);
      const showLikes = await getLikes();
      displayLikes(showLikes);
      showLikesEl = likeBtn.closest('article').querySelector('.likes');
    });
 
    openPopupBtn.addEventListener('click', async () => {
      const show = await getShowById(movieId);
      const showObj = mapShowDto(show, showLikesEl.textContent);
      await renderCommentPopup(showObj);
    });
  });
};
 
export default renderMovies;