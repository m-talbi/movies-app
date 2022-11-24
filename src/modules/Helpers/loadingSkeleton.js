const generateCommentSkeleton = () => `
    <div class="comment skeleton__wrapper">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </div>
  `;

const showLoadingSkeleton = (commentPopupEl) => {
  const commentsCardsWrapper = commentPopupEl.querySelector('.comment_cards__container');
  const commentSectionEl = commentPopupEl.querySelector('.movie__comments');

  commentSectionEl.classList.toggle('fullwidth');
  commentsCardsWrapper.innerHTML = '';
  commentsCardsWrapper.insertAdjacentHTML('beforeend', generateCommentSkeleton());
  commentsCardsWrapper.insertAdjacentHTML('beforeend', generateCommentSkeleton());
  commentsCardsWrapper.insertAdjacentHTML('beforeend', generateCommentSkeleton());
};

export default showLoadingSkeleton;