const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34809960-e72b1bf02b7f952b124a41dc8';

const fetchImages = (searchTheme, page = 1) => {
  const url = `${BASE_URL}?q=${searchTheme}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => response.json());
};

export default fetchImages;
