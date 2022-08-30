const artists = require("../models/artist.model");

const artistfun = async(req, res,)=>{
    const art = await artists.find();
    res.json(art)
}

module.exports= artistfun;