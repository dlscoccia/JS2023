const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')
require('dotenv').config()

// Express server
const app = express()

// Cors
app.use(cors())

// Database
dbConnection()

// Public
app.use(express.static('public'))

// Body parse
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})


// Listen
const port = process.env.PORT
app.listen(port, () => {
  console.log(`App running: ${port}`)
})
