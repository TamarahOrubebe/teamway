//Load Dependencies
const express = require('express');
const getQuestions = require('./questionController')


const Router = express.Router();

Router.get('/', getQuestions)


module.exports = Router;