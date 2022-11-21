export const handleOutsideClick = (component) => {
  const card = component.querySelector('.card');
  document.addEventListener('click', (ev) => {
    if (ev.target.closest('.card') === card) return;
    component.remove();
  });
};

export const handleCloseBtnClick = (commentsPopupEl) => {
  const btn = commentsPopupEl.querySelector('#close-popup-icon');
  btn.addEventListener('click', () => {
    commentsPopupEl.remove();
  });
};
