/* eslint-disable @typescript-eslint/no-floating-promises */
import request from 'supertest';

import { app, server } from '../../app';

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  it('should return 200', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body).toMatchObject({ status: 'ok' });
          done();
        }
      });
  });
});
