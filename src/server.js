const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const PORT = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
