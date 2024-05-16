import mongoose from "mongoose";

const userschema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required: true,
    }
})

const user = mongoose.model('user', userschema);
export default user;