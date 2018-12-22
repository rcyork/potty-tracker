import { Router, Request, Response } from 'express';

import {
  getAllLetOuts,
  createLetOut,
  updateLetOut,
} from '../db/queries/letOuts';
import { createJsonMiddleware } from './routeHelpers';

const router = Router();

router.get('/let-outs', createJsonMiddleware(() => getAllLetOuts()));

router.post(
  '/let-outs',
  createJsonMiddleware((req: Request, res: Response) =>
    createLetOut(req.body.leo, req.body.lucy),
  ),
);

router.post(
  '/let-outs/:key',
  createJsonMiddleware((req, res) => updateLetOut(req.params.key, req.body)),
);

export default router;
