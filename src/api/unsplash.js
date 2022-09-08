import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uoUjz5NgBYkKeVxZw6n0DVtGF2Ravlk46e1duBsYWg4',
  },
});
