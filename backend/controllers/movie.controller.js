const movies = require("../models/movie.model");
const express = require("express");

const moviefun = async (req, res) => {
  const movi = await movies.find({published:"true"});
  res.json(movi)
 
 
};

const moviefun2 = async(req, res) => {
  let rele = req.query.status;

 let status =  req.query.status;
 let title =  req.query.title;
 let mg =  req.query.genres;
 let ar =  req.query.artists;
 let sd =  req.query.start_date;
 let ed =  req.query.end_date;

 if(rele === "RELEASED"){
  const movi2 = await movies.find({released:"true"});
  res.json(movi2);
 }
 else if( title ){
  const movi3 = await movies.find({title});
  res.json(movi3);
 }
 else{
  res.json({massge:"not vaild"})
 }
 
 
};

const moviefun3 = async (req, res) => {
 let dataid = req.params.movieid;
 
  const data = await movies.find({movieid:dataid});
  res.json(data);
};

module.exports = { moviefun, moviefun2, moviefun3 };
