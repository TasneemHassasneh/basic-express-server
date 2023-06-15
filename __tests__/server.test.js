'use strict';

const request = require('supertest');
const { app } = require('../src/server');
const req = request(app);

describe('Server', () => {
  describe('GET /person', () => {
    it('should respond with a JSON object containing the name', async () => {
      const name = 'John';
      const response = await request(app).get(`/person?name=${name}`);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ name });
    });

    it('should respond with 500 if name is missing in the query string', async () => {
      const response = await request(app).get('/person');
      expect(response.status).toEqual(500);
    });
  });

  describe('GET /', () => {
    it('should respond with a JSON object containing a welcome message', async () => {
      const response = await request(app).get('/');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({
        code: 200,
        message: 'Welcome to Home page',
      });
    });
  });

  describe('404 Not Found', () => {
    it('Handel not found pages', async () => {
        const res = await req.get('/items');
        expect(res.status).toEqual(404);
    });
  });
});
