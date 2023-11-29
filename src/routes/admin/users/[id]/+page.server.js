export const load = async ({ fetch, params }) => {
  console.log('+page.server.js');
  const id = params.id;
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data;
};
