'use strict';

import bodyParser from 'body-parser';
import express from 'express';

import { messages } from './shared';
import tea from './tea/tea';

const port = process.env.PORT || 8000;
const app = express();

app.use(
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
);

// Will re-route all requests to their intended route
app.post('/', (req: any, res: any, next: any) => {
    if (req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.app) {
        req.url += req.body.queryResult.parameters.app;
        next('route');
    } else {
        return res.json({ fulfillmentText: messages.badRequest });
    }
});

app.use(
    tea,
);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.info(`Server running on port ${port}`);
});
