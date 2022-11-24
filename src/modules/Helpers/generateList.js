const generateGenres = (genresList) => genresList.reduce((List, genre) => `${List}<li>${genre}</li>`, '');
export default generateGenres;