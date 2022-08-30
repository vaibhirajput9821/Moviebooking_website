const express = require("express");
const app = express();
const cors = require("cors");
const movies = require('./routes/movie.routes');
const artist = require('./routes/artist.routes');
const genre = require('./routes/genre.routes');
const bodyparser = require("body-parser");
const user = require("./routes/user.routes");


const PORT = 8085;
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(movies);
app.use(genre);
app.use(artist);
app.use(user);


app.get('/', (req, res)=>{
    res.send("Welcome to Upgrad Movie booking application development.");
});


app.listen(PORT, ()=>{
    console.log("server is running on this PORT "+PORT);
})