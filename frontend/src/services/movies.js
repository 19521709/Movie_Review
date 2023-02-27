import axios from "axios";
const getAll = (page = 0) => {
  return axios.get(`http://localhost:80/api/v1/movies?page=${page}`);
};
const get = (id) => {
  return axios.get(`http://localhost:80/api/v1/movies/id/${id}`);
};
const find = (query, by = "title", page = 0) => {
  return axios.get(
    `http://localhost:80/api/v1/movies?${by}=${query}&page=${page}`
  );
};
const createReview = (data) => {
  return axios.post("http://localhsot:80/api/v1/movies/review", data);
};
const updateReview = (data) => {
  return axios.put("http://localhsot:80/api/v1/movies/review", data);
};
const deleteReview = (id, userId) => {
  return axios.delete("http://localhost:80/api/v1/movies/review", {
    data: { review_id: id, user_id: userId },
  });
};
const getRatings = () => {
  return axios.get("http://localhost:80/api/v1/movies/ratings");
};
const MovieDataService = {
  getAll,
  get,
  find,
  createReview,
  updateReview,
  deleteReview,
  getRatings,
};
export default MovieDataService;