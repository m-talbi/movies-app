import { getComments } from '../InvolvementService/InvolvementService.js';

const generateComment = (comment) => `
    <article class="comment">
      <p><strong>${comment.username}</strong> - ${comment.creation_date}</p>
      ${comment.comment}
    </article>
  `;

const renderComments = async (id, commentPopupEl) => {
  const comments = await getComments(id);

  const commentsContainerEl = commentPopupEl.querySelector('.comment_cards__container');
  const commentsTitle = commentPopupEl.querySelector('h3');

  commentsTitle.textContent = comments.length;

  comments.forEach((comment) => {
    commentsContainerEl.insertAdjacentHTML('beforeend', generateComment(comment));
  });
};

export default renderComments;