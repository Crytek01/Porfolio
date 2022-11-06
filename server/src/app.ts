import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import compression from 'compression';

import path from 'path';

const app = express();

app.use(cors());
app.use(helmet());
app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour',
  }),
);

app.use(xss());

app.use(
  express.json({
    limit: '10kb',
  }),
);

app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(compression());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/app/client/dist'));
  app.get('*', function (_request, response) {
    response.sendFile(path.join('/app/client/dist', 'index.html'));
  });
}

export default app;
