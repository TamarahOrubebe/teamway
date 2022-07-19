// LOAD DEPENDENCIES
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const ejs = require("ejs");
const path = require('path');
const questionsRouter = require('./src/routes/questionRoute');

const app = express();


const PORT = process.env.PORT || 3000;

//SETUP MIDDLEWARE

//Static files
app.use(express.static('public'));

// Enable cors for localhost
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

//Setup view engine
app.set("view engine", "ejs");


//mount router
app.use('/questions', questionsRouter);


//ENDPOINTS AND CONTROLLERS

app.get('/', (req, res) => {
    res.render('home')
});


app.listen(PORT, (req, res) => console.log(`Server started on port ${PORT}`));

