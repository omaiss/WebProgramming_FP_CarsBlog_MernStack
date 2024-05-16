
import user from "../models/users.js";
import User from "../models/users.js";

export const SignUpUser = async (request, response) =>{
    console.log(request.body);
    try{
        const user =  request.body;
        const newUser = new User(user);        
        await newUser.save();
        return response.status(200).json({msg:'SignUp Success ;)'})
    }
    catch (error){
        return response.status(500).json({msg:'SignUp Failed due to invalid information ;)', user})
    }
}
