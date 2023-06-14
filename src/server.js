'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//! middleware
const logger = require('./middleware/logger');
const validator = require('../src/middleware/validator');

//? error handling
const pagNotFound = require('../src/error-handlers/404');
const serverError = require('../src/error-handlers/500');

app.use(logger);

//* Routes
app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  res.json({ name: name });
});

app.get('/',(req, res) => {
  res.status(200).json({
    code: 200,
    message: 'Welcome to Home page',
  })
});


app.use(validator);
app.use('*', pagNotFound);
app.use(serverError);

function start(port) {
    app.listen(port, () => console.log('Up and running on port: ', port))
  }
  
  module.exports = {
    app,
    start
  }