const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
require('dotenv').config();

const app = express();
const port = 3555;

app.use(bodyParser.json());




app.listen(port, () => console.log(`Port ${port} now listening`))