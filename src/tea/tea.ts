'use strict';

import bodyParser from 'body-parser';
import express from 'express';

const tea = express();
tea.use(
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
);

tea.post('/tea', (req: any, res: any) => {
    if (req.body.reesult && req.body.result.parameters && req.body.result.parameters.text) {
        return res.json({
            fulfillmentMessages: {
                simpleResponses: [{
                    textToSpeech: 'Great job, it worked!',
                    displayText: 'Great job, it worked!',
                }],
            },
        });
    } else {
        return res.json({
            fulfillmentMessages: {
                simpleResponses: [{
                    textToSpeech: 'Uh oh, something went wrong. Try again.',
                    displayText: 'Uh oh, something went wrong. Try again.',
                }],
            },
        });
    }
});

export default tea;
