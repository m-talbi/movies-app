const BASE_ROUTE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const APP_KEY = '8o1u2AYOtlORRdJgAQd1';

export const getComments = async (movieId) => {
  try {
    const response = await fetch(`${BASE_ROUTE}/${APP_KEY}/comments?item_id=${movieId}`);

    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    return [];
  }
};

export const AddComment = async (comment) => {
  await fetch(`${BASE_ROUTE}/${APP_KEY}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};