const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// db.defaults({
//   york: {
//     dogs: [{ name: 'leo', color: 'blue' }, { name: 'lucy', color: 'red' }],
//     logs: [
//       {
//         date: '2019-06-04T02:53:37.628Z',
//         pottyNumbers: [
//           {
//             name: 'leo',
//             pottyNumber: '1',
//           },
//           {
//             name: 'lucy',
//             pottyNumber: '1',
//           },
//         ],
//       },
//       {
//         date: '2019-06-04T02:54:37.628Z',
//         pottyNumbers: [
//           {
//             name: 'leo',
//             pottyNumber: '3',
//           },
//           {
//             name: 'lucy',
//             pottyNumber: '3',
//           },
//         ],
//       },
//     ],
//   },
// }).write();

const checkRoom = roomKey => {
  return db.has(roomKey).value();
};

const getRoom = roomKey => {
  return db.get(roomKey).value() || {};
};

const addRoom = roomKey => {
  db.set(roomKey, { dogs: [], logs: [] }).write();
};

const addDog = (roomKey, dog) => {
  db.get(`${roomKey}.dogs`)
    .push(dog)
    .write();

  return dog;
};

const removeDog = (roomKey, name) => {
  db.get(`${roomKey}.dogs`)
    .remove({ name })
    .write();

  return db.get(`${roomKey}.dogs`);
};

const getLogs = roomKey => {
  return db.get(`${roomKey}.logs`).value() || [];
};

const addLog = (roomKey, log) => {
  if (!db.has(`${roomKey}.logs`).value()) {
    db.set(`${roomKey}.logs`, [log]).write();
  } else {
    db.get(`${roomKey}.logs`)
      .unshift(log)
      .write();
  }

  return log;
};

const removeLog = (roomKey, date) => {
  db.get(`${roomKey}.logs`)
    .remove({ date })
    .write();

  return true;
};

const updateLog = (roomKey, date, log) => {
  db.get(`${roomKey}.logs`)
    .find({ date })
    .assign({ ...log })
    .write();

  const newDate = log.date || date;
  return db
    .get(`${roomKey}.logs`)
    .find({ date: newDate })
    .value();
};

module.exports = {
  getRoom,
  addRoom,
  addDog,
  removeDog,
  getLogs,
  addLog,
  removeLog,
  updateLog,
  checkRoom,
};
