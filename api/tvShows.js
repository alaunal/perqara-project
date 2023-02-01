const baseUrl = process.env.BASE_URL || "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY || "0c1c58715cb9e8947be10590ed710ab3";

export default (axios) => ({
  getPopular(page = 1) {
    return axios.get(`${baseUrl}tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  },
  getDetail(id) {
    return axios.get(`${baseUrl}tv/${id}?api_key=${API_KEY}&language=en-US`);
  },
  getRecommendation(id) {
    return axios.get(`${baseUrl}tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
  },
  getReview(id) {
    return axios.get(`${baseUrl}tv/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  },
});
