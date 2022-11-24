import { getComments } from '../InvolvementService/CommentService.js';


const generateComment = (comment) => `
    <article class="comment">
      <p><strong>${comment.username}</strong> - ${comment.creation_date}</p>
      <p>${comment.comment}</p>
    </article>
`;

const renderComments = async (id, commentPopupEl) => {
  const comments = await getComments(id);

  const commentsContainerEl = commentPopupEl.querySelector('.comment_cards__container');
  const commentSectionEl = commentPopupEl.querySelector('.movie__comments');

  commentSectionEl.classList.toggle('fullwidth');
  commentsContainerEl.innerHTML = '';
  const commentsTitle = commentPopupEl.querySelector('h3');

  commentsTitle.textContent = `Comments (${comments.length})`;

  comments.forEach((comment) => {
    commentsContainerEl.insertAdjacentHTML('beforeend', generateComment(comment));
  });
};

export default renderComments;
