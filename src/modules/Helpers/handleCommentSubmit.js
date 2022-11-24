import { AddComment } from '../InvolvementService/CommentService.js';
import renderComments from '../AppComponents/displayComments.js';

const handleFormSubmit = async (form) => {
  const commentPopupEl = form.closest('section');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const userField = form.querySelector('#user-field');
    const commentField = form.querySelector('#comment-field');

    const comment = {
      item_id: commentPopupEl.id,
      username: userField.value,
      comment: commentField.value,
    };

    form.reset();
    await AddComment(comment);
    await renderComments(commentPopupEl.id, commentPopupEl);
  });
};

export default handleFormSubmit;