import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import db from './db/connection';
import apiRouter from './routes/api';

const PORT = process.env.PORT || 9000;
const app = express();

db.connect().then(() => {
  app.use(bodyParser.json());

  app.use('/api', apiRouter);

  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join('public/index.html'));
  });

  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
