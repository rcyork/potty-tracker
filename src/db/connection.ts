import { Database } from 'arangojs';
import config from 'config';

import createDocumentInstances from './collections/documents';

const url = process.env.DB_URL || config.get('arango.url');
const dbName = process.env.DB_NAME || config.get('arango.dbName');
const username = process.env.DB_USERNAME || config.get('arango.username');
const password = process.env.DB_PASSWORD || config.get('arango.password');

console.log(
  `Connecting to DB.\n\tenv=${process.env.NODE_ENV},\n\tURL: `,
  url,
  '\n\tdb: ',
  dbName,
  '\n\tusername: ',
  username,
);

const db = new Database({
  url,
});
db.useDatabase(dbName);
db.useBasicAuth(username, password);

console.log('Arango connection established');

export default {
  db,
  documents: createDocumentInstances(db),
};
