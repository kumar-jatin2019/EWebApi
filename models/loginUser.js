const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    email:{
        type:String,
        require:true,
        uninque:true
    },
    password:{
        type:String,
        require:true
    }, 
    token:{
        type:String
    },
    username:{
        type:String
    }

}, {timestamps:true});

const LoginUser  = mongoose.model("loginUser", userSchema);

module.exports = LoginUser;