module.exports.createJsonMiddleware = fn => (req, res) => {
  fn(req, res).then(data => res.json(data));
};
