const questions = require('../models/db');
const supertest = require('supertest');
const  createServer  = require('../../server');
const app = createServer();

describe('It tests the getQuestions function', () => {

    test('It gets a questions array from the /questions endpoint', async () => {
        try {
            const data = await supertest(app).get('/questions');

        expect.assertions(3);
        expect(data.body).toEqual(questions);
        expect(data.body.length).toEqual(10);
        expect(data.body[0].answers.length).toBe(4);
        } catch (err) {
            console.log(err)
        }
        
    })
         
    
});


