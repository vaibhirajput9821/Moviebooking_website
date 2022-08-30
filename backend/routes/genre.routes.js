const genre  = require("express").Router();
const genrefun = require("../controllers/genre.controller");


genre.get('/api/genres', genrefun )

module.exports= genre;
