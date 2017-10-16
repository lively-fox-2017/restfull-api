var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const tools = require('./helper/tools')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signup = require('./routes/signup');

app.use('/', index);
app.use('/users', tools.isLogin, users);
app.use('/login', login);
app.use('/signup', signup);
module.exports = app;
