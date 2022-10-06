import * as express from 'express';

import helloWorldRouter from './routes/helloWordRouter'

const app = express();

app.use('/', helloWorldRouter);

export default app;
