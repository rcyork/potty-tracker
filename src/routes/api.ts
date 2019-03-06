import { Router, Request, Response } from 'express';

import {
  getAllLetOuts,
  createLetOut,
  updateLetOut,
  deleteLetOut,
} from '../db/queries/letOuts';
import { createJsonMiddleware } from './routeHelpers';

const router = Router();

router.get('/let-outs', createJsonMiddleware(() => getAllLetOuts()));

router.post(
  '/let-outs',
  createJsonMiddleware((req: Request, res: Response) =>
    createLetOut(req.body.leo, req.body.lucy, req.body.date),
  ),
);

router.patch(
  '/let-outs/:_id',
  createJsonMiddleware((req, res) => updateLetOut(req.params._id, req.body)),
);

router.delete(
  '/let-outs/:_id',
  createJsonMiddleware((req, res) => deleteLetOut(req.params._id)),
);

export default router;
