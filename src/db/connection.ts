import { Database } from 'arangojs';
import config from 'config';

import createDocumentInstances from './collections/documents';

const db = new Database({
  url: config.get('arango.url'),
});
db.useDatabase(config.get('arango.db'));
db.useBasicAuth(config.get('arango.username'), config.get('arango.password'));

export default {
  db,
  documents: createDocumentInstances(db),
};
