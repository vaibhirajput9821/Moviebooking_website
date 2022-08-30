const Genre = require("../models/genre.model");

const genrefun = async (req, res,)=>{
    const genre = await Genre.find();
    res.json(genre)
    }
    
    module.exports= genrefun;