const mongoose = require("mongoose");
const connection = require("../models/index");


const moviesschema = new mongoose.Schema({
    movieid:{
    type:Number,
    required:true,
    unique:true,    
},
title:{
    type:String,
    required:true,    
},
published:{
    type:Boolean,
    required:true,   
},
released:{
    type:Boolean,
    required:true,  
},
poster_url:{
    type:String,
    required:true,
},
release_date:{
    type:Number,
    required:true, 
},
publish_date:{
    type:Number,
    required:true,
},

artists:[
    {
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
    

}],

genres:[],

duration:{
    type:Number,
    required:true,
},
critic_rating:{
    type:Number,
    required:true,
},
trailer_url:{
    type:String,
    required:true,
    unique:true,   
},
wiki_url:{
    type:String,
    required:true,
    unique:true, 
},

story_line:{
    type:String,
    required:true,
    unique:true, 
},

shows:[
    {
        id:{
        type:Number,
        required:true,
        unique:true, 
    },
    theatre:[
    {
        name:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
      
    },

    ],
    
    language:{
        type:String,
        required:true,
    },
    show_timing:{
        type:Number,
        required:true,
    }, 
    available_seats:{
        type:Number,
        required:true,
    }, 
    unit_price:{
        type:Number,
        required:true,
    },
    

}],

});

const movies =  mongoose.model("Movies", moviesschema)
module.exports = movies;