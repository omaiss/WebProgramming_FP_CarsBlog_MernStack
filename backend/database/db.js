import mongoose from "mongoose"
 
const Connect_to_DB = async (uname, pass) => {
    const URL = `mongodb+srv://${uname}:${pass}@webcluster.jqjqrgh.mongodb.net/?retryWrites=true&w=majority&appName=webcluster`;
    try{
        await mongoose.connect(URL);
        console.log('Database connection established.'); 
    }
    catch (error) {

    }
}

export default Connect_to_DB;