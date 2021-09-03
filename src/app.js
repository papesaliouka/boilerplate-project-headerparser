var express = require('express');
const path  = require('path');
var cors = require('cors');
const morgan  = require('morgan');
const whoAmIRouter = require('./routes/routers');

var app = express();


app.use(morgan('combined'))
app.use(cors({optionsSuccessStatus: 200}));

app.use(whoAmIRouter);

app.use(express.static(path.join(__dirname+ '..','..', 'public')));


module.exports = app;