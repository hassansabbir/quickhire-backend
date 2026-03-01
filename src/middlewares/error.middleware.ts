import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorMessages: { path: string | number; message: string }[] = [];

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errorMessages = err.issues.map((issue) => {
      return {
        path: String(issue.path[issue.path.length - 1]),
        message: issue.message,
      };
    });
  } else if (err?.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
    errorMessages = Object.values(err.errors).map((val: any) => {
      return {
        path: val?.path as string,
        message: val?.message,
      };
    });
  } else if (err?.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID';
    errorMessages = [
      {
        path: String(err.path),
        message: err.message,
      },
    ];
  } else if (err?.code === 11000) {
    statusCode = 400;
    message = 'Duplicate Entry';
    errorMessages = [
      {
        path: '',
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: process.env.NODE_ENV !== 'production' ? err?.stack : undefined,
  });
};

export default globalErrorHandler;
