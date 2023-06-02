import app from './app.js'
import { PORT } from './config.js'
import './database.js'
import 'dotenv/config'

app.listen(PORT, () => {
  console.log(`🚀🚀 Server listening on PORT ${PORT}`)
})
