const express = require('express');
const app = express();

const gaffRoutes = require('./gaffs');

app.use('/gaffs', gaffRoutes);

module.exports = app;