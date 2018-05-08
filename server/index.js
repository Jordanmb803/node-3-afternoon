const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
require('dotenv').config();
const checkForSession = require('./middlewares/checkForSession');

const app = express();
const port = 3555;

app.use(bodyParser.json());
app.session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
})
app.use(checkForSession)


app.listen(port, () => console.log(`Port ${port} now listening`))