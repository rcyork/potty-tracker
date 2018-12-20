const { Router } = require('express');

const {
  getAllLetOuts,
  createLetOut,
  updateLetOut,
} = require('../db/queries/letOuts');
const { createJsonMiddleware } = require('./routeHelpers');

const router = Router();

router.get('/let-outs', createJsonMiddleware(() => getAllLetOuts()));

router.post(
  '/let-outs',
  createJsonMiddleware((req, res) => createLetOut(req.body)),
);

router.post(
  '/let-outs/:key',
  createJsonMiddleware((req, res) => updateLetOut(req.params.key, req.body)),
);

module.exports = router;
