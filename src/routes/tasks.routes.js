import express from "express";
import { createTask, deleteTask, getAll, getTask, updateTask } from '../controllers/tasks.controller.js';

const router = express.Router();

router.get("/", getAll );
router.get("/:id", getTask );
router.post("", createTask );
router.put("/:id", updateTask );
router.delete("/:id", deleteTask );

  export default router