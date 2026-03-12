const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express();

//morgan - support print log per request
//helmet - secure express app  - set header info
//compression - help reduce data transaction 


//inti middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
//init db
//handle error
//init router

module.exports = app;