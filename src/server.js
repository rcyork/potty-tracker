const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');
const PORT = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

process.on('SIGINT', () => {
  console.log('Bye bye!');
  process.exit();
});
