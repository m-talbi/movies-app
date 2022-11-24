const BASE_ROUTE = 'https://api.tvmaze.com';

export const getShowById = async (id) => {
  try {
    const response = await fetch(`${BASE_ROUTE}/shows/${id}`);

    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    return [];
  }
};

export const getShowByName = async (showName) => {
  try {
    const response = await fetch(`${BASE_ROUTE}/search/shows?q=${showName}`);
    if (!response.ok) {
      return {
        result: 'Not Found',
      };
    }
    const show = await response.json();
    return show[0].show;
  } catch (error) {
    return {
      result: error.message,
    };
  }
};