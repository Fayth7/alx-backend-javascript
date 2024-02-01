const { expect } = require('chai');
const request = require('request');

describe('Login endpoint', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  it('Correct response for /login endpoint', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' }
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});

describe('Available payments endpoint', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  it('Correct response for /available_payments endpoint', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});
