export const handle = async ({ event, resolve }) => {
  console.log('handle', event.route.id);
  const restricted_apis = ['/api/users/[id]'];
  if (restricted_apis.find((item) => item === event.route.id))
    throw new Error('Restricted');
  return resolve(event);
};

export const handleFetch = ({ event, fetch, request }) => {
  console.log('handle fetch', event.route.id);
  return fetch(request);
};

export const handleError = ({ error, event }) => {
  console.log('handle error', event.route.id);

  return {
    message: error.message,
    status: error.code,
  };
};
