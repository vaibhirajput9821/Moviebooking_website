const movies = require("express").Router();
const  {moviefun,moviefun2,moviefun3,} = require("../controllers/movie.controller" );

movies.get('/movies',moviefun); // for publish

movies.get('/api/movies',moviefun2); // for release and for queryString!!

movies.get('/api/movies/:movieid',moviefun3); //  for Movie id 



module.exports= movies;
