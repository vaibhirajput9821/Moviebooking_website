const artist  = require("express").Router();
const artistfun = require("../controllers/artist.controller");


artist.get('/api/artists', artistfun )

module.exports= artist;
