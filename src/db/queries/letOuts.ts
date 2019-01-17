import cxn from '../connection';

export const getAllLetOuts = async () => {
  return cxn.documents.letOuts.all().then(cursor => cursor.all());
};

export const createLetOut = async (
  leo: string,
  lucy: string,
  date?: number,
) => {
  const doc = { leo, lucy, date: date || Date.now() };

  return cxn.documents.letOuts
    .save(doc, { returnNew: true })
    .then(data => data.new);
};

export const updateLetOut = async (key: string, doc: object) => {
  return cxn.documents.letOuts
    .update(key, doc, { returnNew: true })
    .then(data => data.new);
};

export const deleteLetOut = async (key: string) => {
  return cxn.documents.letOuts.remove(key);
};
