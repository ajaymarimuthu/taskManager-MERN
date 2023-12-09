const Task = require("../models/taskModel");

//creating a new task (Post)

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getting all tasks (get)

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


//getting a single task (get)
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {    
      return res.status(404).json(`No task with id : ${id} is found`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Deleting a task 

const deleteTask = async (req,res)=>{

    try{
        const {id} =req.params;
        const deletingTask= await Task.findByIdAndDelete(id);

        if(!deletingTask){
            return res.status(404).json(`No task with id : ${id} is found`);
        } 
        res.status(200).send("Task Deleted")
    }
    catch(error){
        res.status(500).json({ msg: error.message });
    }

}


// Updating a task 

const updateTask = async (req,res)=>{
    try {

        const {id} = req.params;

        const updatingTask = await Task.findByIdAndUpdate(
            {_id:id},req.body,{new:true,runValidators:true},
            )

        if(!updatingTask){
            return res.status(404).json(`No task with id : ${id} is found`);
        } 

        res.status(200).json(updatingTask)
        
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

 


module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask
};
