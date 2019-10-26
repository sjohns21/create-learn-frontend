export let API_BASE = 'http://localhost:3001';
if (process.env.NODE_ENV === "production") {
  API_BASE = 'https://ancient-mountain-14662.herokuapp.com';
}
