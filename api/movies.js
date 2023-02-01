const baseUrl = process.env.BASE_URL || "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY || "0c1c58715cb9e8947be10590ed710ab3";

export default (axios) => ({
  getPopular(page = 1) {
    return axios.get(`${baseUrl}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  },
  getReleaseDate(page = 1) {
    return axios.get(`${baseUrl}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
  },
  getUpComing(page = 1) {
    return axios.get(`${baseUrl}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
  },
  getDetail(id) {
    return axios.get(`${baseUrl}movie/${id}?api_key=${API_KEY}&language=en-US`);
  },
  getRecommendation(id) {
    return axios.get(`${baseUrl}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
  },
  getReview(id) {
    return axios.get(`${baseUrl}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  },
});
