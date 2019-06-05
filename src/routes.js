const { Router } = require('express');

const db = require('./db');

const router = new Router();

router.get('/', (req, res) => {
  db.addRoom('york');
  res.redirect(`/york/settings`);
});

// room
router.get('/api/:roomKey', (req, res) => {
  res.json(db.getRoom(req.params.roomKey));
});

// dogs
router.post('/api/:roomKey/dogs', (req, res) => {
  const newDog = db.addDog(req.params.roomKey, req.body);

  res.json(newDog);
});

router.delete('/api/:roomKey/dogs/:name', (req, res) => {
  const remainingDogs = db.removeDog(req.params.roomKey, req.params.name);

  res.json(remainingDogs);
});

// logs
router.get('/api/:roomKey/logs', (req, res) => {
  res.json(db.getLogs(req.params.roomKey));
});

router.post('/api/:roomKey/logs', (req, res) => {
  const log = db.addLog(req.params.roomKey, req.body);

  res.json(log);
});

router.delete('/api/:roomKey/logs/:date', (req, res) => {
  db.removeLog(req.params.roomKey, req.params.date);

  res.json({ success: true });
});

router.patch('/api/:roomKey/logs/:date', (req, res) => {
  const { roomKey, date } = req.params;
  const updatedLog = db.updateLog(roomKey, date, req.body);

  res.json(updatedLog);
});

module.exports = router;
