const { Database } = require('arangojs');
const config = require('config');

const { createDocumentInstances } = require('./collections/documents');

const db = new Database({
  url: config.arango.url,
});
db.useDatabase(config.arango.db);
db.useBasicAuth(config.arango.username, config.arango.password);

module.exports = {
  db,
  documents: createDocumentInstances(db),
};
