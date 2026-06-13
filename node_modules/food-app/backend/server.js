import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/uploads', express.static('uploads'))

// Connect to database
connectDB()

// Routes
app.use('/api/foods', foodRouter)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const frontendDistPath = path.join(__dirname, '../frontend/dist')

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath))
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'))
  })
}

app.get('/', (req, res) => {
  res.send('Hello from the backend!')
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
