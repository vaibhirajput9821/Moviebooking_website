const user = require("express").Router();
const userfun = require("../controllers/user.controller");


user.get('/user',userfun)

module.exports= user;