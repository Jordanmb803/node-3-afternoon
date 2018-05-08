const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const checkForSession = require('./middlewares/checkForSession');
const sc= require('./controllers/swag_controller');

const app = express();
const port = 3555;

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(checkForSession)

app.get('/api/swag', sc.read )


app.listen(port, () => console.log(`Port ${port} now listening`))