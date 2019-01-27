'use strict';

import bodyParser from 'body-parser';
import express from 'express';

const tea = express();
tea.use(
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
);

tea.post('/tea', (req: any, res: any) => {
    if (req.body.result && req.body.result.parameters && req.body.result.parameters.text) {
        return res.json({
            displayText: 'It worked!',
            source: 'google-home-webhook-tea',
            speech: 'It worked',
        });
    } else {
        return res.json({
            displayText: 'Uh oh, something went wrong! Try again.',
            source: 'google-home-webhook-tea',
            speech: 'Uh oh, something went wrong. Try again.',
        });
    }
});

export default tea;
