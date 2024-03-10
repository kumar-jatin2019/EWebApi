const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }

}, {timestamps:true});

const Users  = mongoose.model("users", userSchema);

module.exports = Users;