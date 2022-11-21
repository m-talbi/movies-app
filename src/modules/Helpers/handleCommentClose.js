export const handleOutsideClick = (component) => {
  document.addEventListener('click', (ev) => {
    if (ev.target.closest('.card') === component) return;
    component.remove();
  });
};

export const handleCloseBtnClick = (commentsPopupEl) => {
  const btn = commentsPopupEl.querySelector('#close-popup-icon');
  btn.addEventListener('click', () => {
    commentsPopupEl.remove();
  });
};
