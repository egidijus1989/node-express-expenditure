const express = require('express')
const morgan = require('morgan')
const expenditureRouter = require('./routes/expenditureRoutes')
const app = express()
const router = express.Router()
app.use(express.json())

app.use(morgan('dev'))
app.use('/api/v1/expenditures', expenditureRouter)

module.exports = app;