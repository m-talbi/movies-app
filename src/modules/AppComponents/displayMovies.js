import { getMovies } from "../TvMazeService/TvMazeService";

const generateMovie = (movie) => `
    <div class="movie-card">
        <img src="${movie.image.medium}" class="card-img" alt="movie image" />
        <div class="card-footer">
          <h3 class="movie-title">${movie.name}</h3>
          <ul class="movie-tags">
            <li>${movie.genres[0]}</li>
            <li>${movie.genres[1]}</li>
            <li>${movie.genres[2]}</li>
          </ul>
          <div class="action">
          <button class="card-btn">See more</button>
          </div>
        </div>
    </div>
`;

const renderMovies = async () => {
  const movies = await getMovies();
  const moviesContainer = document.querySelector('.movies-list');
  movies.forEach((movie) => {
    moviesContainer.insertAdjacentHTML('beforeend', generateMovie(movie));
  });
};

export default renderMovies;