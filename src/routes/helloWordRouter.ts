import * as express from 'express';
import { Request, Response } from 'express'

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World!',
  });
})

export default router;