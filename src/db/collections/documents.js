const collectionNames = ['letOuts'];

module.exports.createDocumentInstances = db => {
  return collectionNames.reduce((acc, name) => {
    acc[name] = db.collection(name);

    return acc;
  }, {});
};
