const express = require('express');
const country_router = require('./router/country_router');
const member_router = require('./router/member_router');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

// for parsing application/json
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

// for payload logger
app.use(bodyParser.json());
morganBody(app);

// use template engine
app.set('view engine', 'ejs');


// router
app.use(country_router)
app.use(member_router)

// running the app
const port = process.env.PORT;
app.listen(port, function () {
    console.log('server running on port: ' + port)
});