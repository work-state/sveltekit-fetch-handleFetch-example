import { mock_users } from '$lib/mocks';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
  console.log('+server.js');
  const id = params.id;
  return json(mock_users.find((user) => user.id === id));
};
