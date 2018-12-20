const cxn = require('../connection');

module.exports.getAllLetOuts = async () => {
  return cxn.documents.letOuts.all().then(cursor => cursor.all());
};

module.exports.createLetOut = async ({ leo, lucy }) => {
  const doc = { leo, lucy, date: Date.now() };

  return cxn.documents.letOuts
    .save(doc, { returnNew: true })
    .then(data => data.new);
};

module.exports.updateLetOut = async (key, doc) => {
  return cxn.documents.letOuts
    .update(key, doc, { returnNew: true })
    .then(data => data.new);
};
