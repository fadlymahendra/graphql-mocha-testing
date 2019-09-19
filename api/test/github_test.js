const expect = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));
const endpoint = require('../helper/github_endpoint.js');
const query = require('../query/github_query.js')
const statusCode = require('../helper/status_code.json')
const schema = require('../json_schema/github_schema.json');
const token = require('../helper/token.json')

const testCase = {
 "describe" : "Github last posts from specific owner",
 "positive" : {
    "myToken" : "As an Owner, I want to see tittle and url from specific owner's last post",
 },
 "negative" : {
    "invalidToken" : "As a unregistered user, I should not be able to see specific owner's last posts"
 }
}

describe(`@graph ${testCase.describe}`, () => {
 it(`@get ${testCase.positive.myToken}`, async() => {
   const response = await endpoint.github(token.myToken, query.titleUrl);
   expect(response.status).to.equal(statusCode.successOk);
   expect(response.body).to.be.jsonSchema(schema);
 }),
 it(`@get ${testCase.negative.invalidToken}`, async() => {
   const response = await endpoint.github(token.invalidToken, query.titleUrl);
   expect(response.status).to.equal(statusCode.failedUnauthorized.codeNumber);
   expect(response.body.message).to.equal(statusCode.failedUnauthorized.codeMessage)
 })
}) 