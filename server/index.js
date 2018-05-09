const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const checkForSession = require('./middlewares/checkForSession');
const sc = require('./controllers/swag_controller');
const ac = require('./controllers/auth_controller');
const cc = require('./controllers/cart_controller');
const searchC = require('./controllers/search_controller');

const app = express();
const port = 3555;

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(checkForSession)

// SWAG
app.get('/api/swag', sc.read )

// AUTH
app.post('/api/login', ac.login)
app.post('/api/register', ac.register)
app.post('/api/signout', ac.signout)
app.get('/api/user', ac.getUser)

// CART
app.post('/api/cart', cc.add )
app.post('/api/cart/checkout', cc.checkout)
app.delete('/api/cart', cc.delete)

// SEARCH
app.get('/api/search', searchC.search)

app.listen(port, () => console.log(`Port ${port} now listening`))