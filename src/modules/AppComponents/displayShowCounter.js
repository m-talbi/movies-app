const displayShowCounter = (shows) => {
  const counterContainer = document.querySelector('.show-number');
  counterContainer.innerHTML = `(${shows.length})`;
};

export default displayShowCounter;
