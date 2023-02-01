const baseUrl = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

export default (axios) => ({
  getGenre() {
    return axios.get(`${baseUrl}genre/movie/list?api_key=${API_KEY}&language=en-US`);
  },
  getGenreTv() {
    return axios.get(`${baseUrl}genre/tv/list?api_key=${API_KEY}&language=en-US`);
  },
  getKeywords(keyword) {
    return axios.get(`${baseUrl}search/keyword?api_key=${API_KEY}&page=1&query=${keyword}`);
  },
});
