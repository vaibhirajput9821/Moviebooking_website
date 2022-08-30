const mongoose = require("mongoose");
const connection = require("../models/index");


const user = new mongoose.Schema({
artistid:{
    type:Number,
    required:true,
    unique:true,    
},
userid:{
    type:Number,
    required:true,
    unique:true,    
},
email:{
    type:String,
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
username:{
    type:String,
    required:true,
    unique:true,   
},
contact:{
    type:Number,
    required:true,
    unique:true,   
},
password:{
    type:String,
    required:true,
    unique:true,   
},
role:{
    type:String,
    required:true,  
},
isLoggedIn:{
    type:Boolean,
    required:true, 
},
uuid:{
    type:String,
    required:true, 
},
accesstoken:{
    type:String,
    required:true,
    unique:true,   
},
coupens:[
{
    id:{
    type:Number,
    required:true,
    unique:true,    
    }
},

{
    discountValue:{
    type:Number,
    required:true,
    }
}
],

bookingRequests:[
{
        reference_number:{
        type:Number,
        required:true,
        unique:true, 
    },
    coupon_code:{
        type:Number,
        required:true,
    },
    show_id:{
        type:Number,
        required:true,
    },
    tickets:[],

},]

});

const User = new mongoose.model("User", user)
module.exports = User;