const supertest = require('supertest');
const  createServer  = require('../../server');
const app = createServer();

describe('It tests the get / handler', () => {

    test('It renders the landing page using ejs onto the frontend when the root route is hit', async () => {
        try {
            const data = await supertest(app).get('/');
            
            expect.assertions(3);
            expect(data.statusCode).toEqual(200);
            expect(data.headers['content-type']).toEqual('text/html; charset=utf-8');
            expect(data.headers['content-length']).toEqual('2284');
        
       
        } catch (err) {
            console.log(err)
        }
        
    })
         
    
});
