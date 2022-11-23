const BASE_ROUTE = 'https://api.tvmaze.com';
const SHOW_ROUTE = `${BASE_ROUTE}/show/`;

export const getMovies = async () => {
  try {
    const response = await fetch(`${SHOW_ROUTE}`);

    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    return [];
  }
};