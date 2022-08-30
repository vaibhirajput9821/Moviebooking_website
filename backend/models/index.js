const mongoose = require('mongoose');

const uri = 'mongodb+srv://moviebooking:moviebooking@movie.jkmgvt1.mongodb.net/moviebooking?retryWrites=true&w=majority'
const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database connection is Successful")
}).catch((error)=>{
    console.log("Database is not Connect " +error)
})

module.exports= connection;