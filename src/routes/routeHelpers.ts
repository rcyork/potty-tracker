import { Request, Response } from 'express';

type DataMiddleware = (req: Request, res: Response) => Promise<Object>;

export const createJsonMiddleware = (fn: DataMiddleware) => (
  req: Request,
  res: Response,
) => {
  fn(req, res).then((data: object) => res.json(data));
};
