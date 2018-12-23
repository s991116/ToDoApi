const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.port || 8080;

const apiRoutes = require('./api-routes');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost/resthub');
var db = mongoose.connection;

app.listen(port, function() {
    console.log("Running Service on port " + port);
})