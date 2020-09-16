const API_KEY = "826df48df85db7f56c14c58a079b4b12";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geres=99`
};

export default requests;