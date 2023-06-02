import express from 'express'
import { createTask, deleteTask, getAll, getTask, updateTask } from '../controllers/tasks.controller.js'
import userExtractor from '../middleware/userExtractor.js'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getTask)
router.post('/', userExtractor, createTask)
router.put('/:id', userExtractor, updateTask)
router.delete('/:id', userExtractor, deleteTask)

export default router
