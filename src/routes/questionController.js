const questions = require('../models/db');


const getQuestions = (req, res) => {
    res.json(questions).status(200);
};


module.exports = getQuestions;