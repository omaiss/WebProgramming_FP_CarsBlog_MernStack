import mongoose from "mongoose"
 
const Connect_to_DB = async (uname, pass) => {
    const URL = `mongodb+srv://${uname}:${pass}@cluster0.fatievb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL);
        console.log('Database connection established.'); 
    }
    catch (error) {

    }
}

export default Connect_to_DB;