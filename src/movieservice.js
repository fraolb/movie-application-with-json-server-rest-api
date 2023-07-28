//import axios module
const axios = require("axios");

//After starting the JSOn server check the port on which is running accordingly change
//the port in url given below

//This method will get all movies from json server
const getMovies = (done) => {
  // This url can be used - axios.get("http://localhost:3000/movies")
  axios
    .get("http://localhost:3000/movies")
    .then((response) => done(null, response.data))
    .catch((err) => {
      console.log("the error is ", err);
      done("Encountered error while fetching using axios");
    });
};

//This method will get specific movie id from json server
const getMovieById = (movieId, done) => {
  // This url can be used- axios.get(`http://localhost:3000/movies/${movieId}`)
  axios
    .get(`http://localhost:3000/movies/${movieId}`)
    .then((response) => done(null, response.data))
    .catch((err) => {
      console.log("error found while getting it ", err);
      done("Endountered errror while finding the movie");
    });
};
//This method will save Movie details in Json server
const saveMovieDetails = (movieDetails, done) => {
  //This url can be used  -  axios.post(`http://localhost:3000/movies`, movieDetails)
  axios
    .post(`http://localhost:3000/movies`, movieDetails)
    .then((response) => done(null, response.data))
    .catch((err) => {
      console.log("error found saving file ", err);
      done("Encountered error while saving");
    });
};

//This method will update MovieDetails in Json Server
const updateMovieDetails = (movieId, movieDetails, done) => {
  //This url can be used - axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
  axios
    .patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
    .then((response) => done(null, response.data))
    .catch((err) => {
      console.log("error found updating file ", err);
      done("Encountered error while updating");
    });
};

//This method will delete specific movie from Json Server
const deleteMovieById = (movieId, done) => {
  //This url can be used -  axios.delete(`http://localhost:3000/movies/${movieId}`)
  axios
    .delete(`http://localhost:3000/movies/${movieId}`)
    .then((response) => done(null, response))
    .catch((err) => {
      console.log("error found deleting file ", err);
      done("Encountered error while deleting");
    });
};

module.exports = {
  getMovies,
  getMovieById,
  saveMovieDetails,
  deleteMovieById,
  updateMovieDetails,
};
