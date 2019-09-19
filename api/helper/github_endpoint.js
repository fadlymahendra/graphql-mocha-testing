const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const github = (token, query) => api.post('/graphql')
   .set('Authorization', token)
   .send(query)

module.exports = {
   github,
}