import express from 'express';
import request from 'supertest';

import tea from './tea';

const app = express();

app.use(tea);

describe('POST /tea', () => {
    it('should work', async () => {
        return request(app)
            .post('/tea')
            .send({ result: undefined })
            .then((res) => {
                expect(res.body).toEqual({
                    displayText: 'Uh oh, something went wrong! Try again.',
                    source: 'webhook-tea-time',
                    speech: 'Uh oh, something went wrong. Try again.',
                });
            });
    });
});
