'use strict';

import express from 'express';

import tea from './tea/tea';

const port = process.env.PORT || 8000;
const app = express();

app.use(
    tea,
);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.info(`Server running on port ${port}`);
});
