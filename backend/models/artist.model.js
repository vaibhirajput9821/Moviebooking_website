const mongoose = require("mongoose");
const connection = require("../models/index");


const Artist = new mongoose.Schema({
artistid:{
    type:Number,
    required:true,
    unique:true,    
},
first_name:{
    type:String,
    required:true,   
},
last_name:{
    type:String,
    required:true,  
},
wiki_url:{
    type:String,
    required:true,   
},
profile_url:{
    type:String,
    required:true,    
},
movies:[],

});

const artists = new mongoose.model("Artists", Artist)
module.exports = artists;