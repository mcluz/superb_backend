const chai = require('chai');
const chaiHttp = require('chai-http');
const createHttpServer = require('../httpServer');

const { expect } = chai;

chai.use(chaiHttp);

let server;

describe('Basic routes', () => {
  before(() => {
    server = createHttpServer(3001);
  });

  after(() => {
    server.close();
  });

  describe('GET /health', () => {
    it('should receive ok', (done) => {
      chai
        .request(server)
        .get('/health')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).equal('{"ok":true}');
          done();
        });
    });
  });
});
