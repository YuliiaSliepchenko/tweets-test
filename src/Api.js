const endpoint = '/tweet-test';
const itemsPerPage = 3;

export function getTweets(page) {
  return fetch(
    `https://647b2a4bd2e5b6101db0f027.mockapi.io/api/tweet${endpoint}?page=${page}&limit=${itemsPerPage}`,
    {
      method: 'GET',
    }
  ).then(response => response.json());
}

export function getFollowTweews(id, followers) {
  return fetch(
    `https://647b2a4bd2e5b6101db0f027.mockapi.io/api/tweet${endpoint}/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(followers),
    }
  ).then(response => response.json());
}
