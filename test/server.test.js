import { expect } from 'chai';
import request from 'supertest';
import app from '../src/server.js';

describe('String Calculator API', () => {
  it('should return sum via POST /add', async () => {
    const res = await request(app)
      .post('/add')
      .send({ numbers: '1,2,3' })
      .expect(200);
    expect(res.body.result).to.equal(6);
  });

  it('should handle negative numbers with error', async () => {
    const res = await request(app)
      .post('/add')
      .send({ numbers: '1,-2,-3' })
      .expect(400);
    expect(res.body.error).to.equal('negative numbers not allowed -2,-3');
  });
});