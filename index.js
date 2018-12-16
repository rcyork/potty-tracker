const express = require('express');

const PORT = process.env.PORT || 9000;
const app = express();

app.get('/message', (req, res) => res.json({ message: 'hello world' }));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
