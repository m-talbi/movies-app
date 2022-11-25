const BASE_ROUTE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

export const getLikes = async () => {
  try {
    const response = await fetch(`${BASE_ROUTE}/${process.env.INVOLVEMENT_KEY || '8o1u2AYOtlORRdJgAQd1'}/likes`);

    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    return [];
  }
};

export const AddLike = async (showId) => {
  await fetch(`${BASE_ROUTE}/${process.env.INVOLVEMENT_KEY || '8o1u2AYOtlORRdJgAQd1'}/likes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: showId,
    }),
  });
};