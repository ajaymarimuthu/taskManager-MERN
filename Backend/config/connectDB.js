const mongoose=require("mongoose");


const connectDB=async()=>{
    try {

        const connect=await mongoose.connect("mongodb+srv://ajayindia8001:"+ encodeURIComponent("Ajvennila01#") + "@cluster0.m05p2fr.mongodb.net/Task-Manager?retryWrites=true&w=majority");
      
        
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}



module.exports=connectDB;