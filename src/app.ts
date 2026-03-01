import express, { Application, Request, Response } from 'express';
import cors from 'express'; // wait cors is default export from cors package
import globalErrorHandler from './middlewares/error.middleware';
import apiRouter from './routes';

const app: Application = express();
const corsMiddleware = require('cors');

app.use(corsMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('QuickHire API is running');
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API route not found',
      },
    ],
  });
});

app.use(globalErrorHandler);

export default app;
