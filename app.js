const express = require('express');
const app = express();

const plateCheckRoutes = require('./api/routes/checkRegistration');

app.use('/checkRegistration',plateCheckRoutes);

module.exports = app;
