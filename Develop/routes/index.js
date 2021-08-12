const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./note');

const app = express();

app.use('/note', tipsRouter);

module.exports = app;
