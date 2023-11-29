# SVELTEKIT-FETCH-HANDLEFETCH-EXAMPLE

As per my observations, there are three functions (`handle()`, `handleFetch()`, and `handleError()`) designed to handle fetch requests. Each of these functions accepts an event parameter (same type `RequestEvent`), which includes a route.id. However, I've noticed that the `handleFetch()` function, while including the route.id parameter, seems to display the route from where the `fetch()` is called rather than the specific endpoint mentioned in `fetch()`.

for example:

calling fetch from `+page.server.js` from the url `http://localhost:5173/admin/users/123`

```
export const load = async ({ fetch, params }) => {
  const id = params.id;
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data;
};
```

handling fetch from the three functions in `+hooks.server.ts`:

```
export const handle: Handle = ({ event, }) => {
  console.log(event.route.id); // expected result: api/users/[id]
  // output result: api/users/[id]
};

export const handleFetch: HandleFetch = ({ event }) => {
  console.log(event.route.id); // expected result: api/users/[id]
  // output result: admin/users/123 --> UGH!!!!
};

export const handleError = ({ event }) => {
  console.log(event.route.id); // expected result: api/users/[id]
  // output result: api/users/[id]
};
```
