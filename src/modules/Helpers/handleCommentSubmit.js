import { AddComment } from '../InvolvementService/CommentService.js';
import renderComments from '../AppComponents/displayComments.js';
import showLoadingSkeleton from './loadingSkeleton.js';

const handleFormSubmit = (form) => {
  const commentPopupEl = form.closest('section');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const userField = form.querySelector('#user-field');
    const commentField = form.querySelector('#comment-field');
    const id = commentPopupEl.id.replace('popup-', '');

    const comment = {
      item_id: id,
      username: userField.value,
      comment: commentField.value,
    };

    form.reset();
    showLoadingSkeleton(commentPopupEl);
    await AddComment(comment);
    await renderComments(id, commentPopupEl);
  });
};

export default handleFormSubmit;
