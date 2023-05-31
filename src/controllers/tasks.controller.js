import Task from "../models/task.model.js";

export async function getAll(_req, res) {
  const tasks = await Task.find({});
  res.json(tasks);
}

export async function getTask(req, res) {
  const task = await Task.findById(req.params.id);
  res.json(task);
}

export async function createTask(req, res) {
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

export async function updateTask(req, res) {
  try {
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(204).json(taskUpdate);
  } catch (error) {
    
  }
}

export async function deleteTask(req, res) {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json(task);
}
