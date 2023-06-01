import Task from "../models/task.model.js";

 async function getAll(req, res) {
  try {
    const tasks = await Task.find();
   res.status(200).json(tasks);
  } catch (error) {
    res.json(error);
  }
}

 async function getTask(req, res) {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
     res.status(200).json(task);
    
  } catch (error) {
    res.json(error);
  }
}

 async function createTask(req, res) {
  try {
    
    const { title, description, done } = req.body;
     await Task.create({
      title,
      description,
      done
    });
    res.status(201).json({
      message:'task created successfully'
    });
  } catch (error) {
    res.json(error);
  }
}

 async function updateTask(req, res) {
  try {
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message:'task updated successfully',
      body: taskUpdate
    });
  } catch (error) {
    res.json(error);
  }
}

 async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message:'task destroyed successfully',
    body: task
  });
  } catch (error) {
    res.json(error);
  }
}


export{getAll,getTask,createTask,updateTask,deleteTask}