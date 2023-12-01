import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '41016748-18643ee323c29bf7056199cb4';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response;