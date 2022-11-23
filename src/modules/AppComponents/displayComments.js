import { getComments } from '../InvolvementService/InvolvementService.js';

const generateComment = (comment) => `
    <article class="comment">
      <p><strong>${comment.username}</strong> - ${comment.creation_date}</p>
      <p>${comment.comment}</p>
    </article>
`;

const renderComments = async (id, commentPopupEl) => {
  const comments = await getComments(id);

  const commentsContainerEl = commentPopupEl.querySelector('.comment_cards__container');
  commentsContainerEl.innerHTML = '';
  const commentsTitle = commentPopupEl.querySelector('h3');

  commentsTitle.textContent = `Comments (${comments.length})`;

  comments.forEach((comment) => {
    commentsContainerEl.insertAdjacentHTML('beforeend', generateComment(comment));
  });
};

export default renderComments;
