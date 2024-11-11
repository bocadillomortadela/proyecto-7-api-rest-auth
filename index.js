const express = require('express')
const { connectDB } = require('./src/config/db')
const productsRouter = require('./src/api/routes/products')
const brandsRouter = require('./src/api/routes/brands')
const { userRoutes } = require('./src/api/routes/users')
require('dotenv').config()

const cors = require('cors')

const app = express()

connectDB()
app.use(express.json())
app.use(cors())

app.use('/api/v1/products', productsRouter)
app.use('/api/v1/brands', brandsRouter)
app.use('/api/v1/users', userRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Server running on: http://localhost:3000')
})
