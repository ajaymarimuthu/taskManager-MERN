const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router=express.Router();


// create a Task (POST Request)
router.post("/",createTask)

//GET/READ Tasks in database
router.get("/",getTasks)

//GET/READ Task in database
router.get("/:id",getTask)

//Delete Task in database
router.delete("/:id",deleteTask)

//Update Task in database
router.put("/:id",updateTask)


module.exports=router;
