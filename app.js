const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const namesRouter = require('./controllers/name')

mongoose.connect(config.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(() => {
    logger.info('connected to mongoose')
}).catch((error) => {
    logger.error('error connection to mongoose', error.message)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(express.urlencoded())
app.use(middleware.requestLogger)

app.use('/api/names', namesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app