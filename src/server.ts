import express from 'express';
import bodyParser from 'body-parser';

import apiRouter from './routes/api';

const PORT = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
