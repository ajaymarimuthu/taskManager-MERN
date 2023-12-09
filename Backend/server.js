const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes=require("./routes/taskRoute")


const app = express();

const PORT = process.env.PORT || 5000;

// this is a middlewar functions
app.use(express.json()) //this is express middleware to read json data
app.use(express.urlencoded({extended:false})) //this is express middleware to read url encoded data
app.use("/api/tasks",taskRoutes); // this will call the routes in task routes for task related things 


const logger =(req,res,next)=>{   
    console.log("middleware running");
    console.log("req.method",req.method);
    console.log("req---",req.body);
    console.log("res---",res);
    next();
}

app.get("/",logger, (req, res) => {
  res.send("HOME PAGE");
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("server running ----in PORT", PORT);
    });

  } catch (error) {
    console.log(error);
  }
};
startServer();

