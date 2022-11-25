const BASE_ROUTE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

export const getComments = async (movieId) => {
  try {
    const response = await fetch(`${BASE_ROUTE}/${process.env.INVOLVEMENT_KEY || '8o1u2AYOtlORRdJgAQd1'}/comments?item_id=${movieId}`);

    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    return [];
  }
};

export const AddComment = async (comment) => {
  await fetch(`${BASE_ROUTE}/${process.env.INVOLVEMENT_KEY || '8o1u2AYOtlORRdJgAQd1'}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};