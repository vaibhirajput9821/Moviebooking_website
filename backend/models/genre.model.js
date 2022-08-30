const mongoose = require("mongoose");
const connection = require("../models/index");


const genre = new mongoose.Schema({
    genreid:{
    type:Number,
    required:true,
    unique:true,    
},
genre:{
    type:String,
    required:true,   
},


});

const Genre = new mongoose.model("Genre", genre)
module.exports = Genre;