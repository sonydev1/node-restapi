import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { routeTask, routerAuth } from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/auth/', routerAuth)
app.use('/api/tasks/', routeTask)

export default app
