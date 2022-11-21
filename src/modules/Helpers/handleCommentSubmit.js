import { AddComment } from '../InvolvmentService/InvolvmentService.js';
import renderComments from '../AppComponents/displayComments.js';

const handleFormSubmit = async (form) => {
  const commentPopupEl = form.closest('section');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const comment = {
      item_id: form.closest('section').id,
      username: form.user.value,
      score: form.comment.value,
    };

    form.reset();
    await AddComment(comment);
    await renderComments(commentPopupEl.id, commentPopupEl);
  });
};

export default handleFormSubmit;