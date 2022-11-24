import { handleOutsideClick, handleCloseBtnClick } from '../Helpers/handlePopupClose.js';
import handleFormSubmit from '../Helpers/handleCommentSubmit.js';
import renderComments from './displayComments.js';
import showLoadingSkeleton from '../Helpers/loadingSkeleton.js';
import generateGenres from '../Helpers/generateList.js';
import handlePopupLikeBtn from '../Helpers/handlePopupLikeBtn.js';

const renderCommentPopup = async (movie) => {
  document.body.style.overflowY = 'hidden';
  document.body.insertAdjacentHTML('afterbegin',
    ` <section id="popup-${movie.id}" class="movie_popup__wrapper">
        <div class="card scrollbar-hidden">
          <article class="card-body scrollbar-hidden">
            <h2 class="card-title">${movie.name}</h2>
            <ul class="genres">
              ${generateGenres(movie.genres)}
            </ul>
            <div class="movie_likes">
              <span class="show_likes">${movie.likes} Likes</span>
              <i class="fa-solid fa-heart popup_heart"></i>
            </div>
            ${movie.summary}
            <div>
              <a href="${movie.officialSite}" target="_blank" class="btn-outlined">Watch Trailer</a>
            </div>
            <div class="movie__comments">
              <h3>Comments</h3>
              <div class="comment_cards__container"></div>
            </div>
            <form class="form__comment" action="">
              <input type="text" placeholder="Name" name="user" id="user-field" required>
              <textarea placeholder="Type comment here.." name="comment" id="comment-field" required></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </article>
          <figure class="movie-figure">
            <i id="close-popup-icon" class="fa-solid fa-circle-xmark"></i>
            <img class="movie-image" src="${movie.image}" />
          </figure>
        </div>
      </section>
  `);

  const commentPopupEl = document.querySelector('.movie_popup__wrapper');
  const form = commentPopupEl.querySelector('form');
  const likeBtn = commentPopupEl.querySelector('.popup_heart');
  const likesCounter = commentPopupEl.querySelector('.show_likes');

  likeBtn.addEventListener('click', async () => {
    await handlePopupLikeBtn(movie.id.toString());
    const showLikesEl = document.getElementById(movie.id).querySelector('.likes');
    likesCounter.textContent = `${showLikesEl.textContent} Likes`;
  });

  handleOutsideClick(commentPopupEl);
  handleCloseBtnClick(commentPopupEl);
  handleFormSubmit(form);
  showLoadingSkeleton(commentPopupEl);
  await renderComments(movie.id, commentPopupEl);
};

export default renderCommentPopup;