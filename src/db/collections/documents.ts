import { Database, DocumentCollection } from 'arangojs';

const collectionNames = ['letOuts'];

interface DocumentCollectionInstance {
  [key: string]: DocumentCollection;
}

const createDocumentInstances = (db: Database): DocumentCollectionInstance => {
  return collectionNames.reduce((acc: DocumentCollectionInstance, name) => {
    acc[name] = db.collection(name);

    return acc;
  }, {});
};

export default createDocumentInstances;
