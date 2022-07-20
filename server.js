const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const ejs = require("ejs");
const questionsRouter = require('./src/routes/questionRoute');

const createServer = () => {
const app = express();


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
    
    return app;

}

module.exports = createServer;