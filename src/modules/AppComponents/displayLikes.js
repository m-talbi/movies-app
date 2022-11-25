const displayLikes = (likes) => {
  const cardsLikeEl = document.querySelectorAll('.likes');

  cardsLikeEl.forEach((cardLikeEl) => {
    const likeId = cardLikeEl.closest('article').id;
    const cardLikes = likes.find((item) => item.item_id === likeId);
    cardLikeEl.textContent = cardLikes?.likes || 0;
  });
};

export default displayLikes;