import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { JobService } from './jobs.service';

const createJob = catchAsync(async (req: Request, res: Response) => {
  const result = await JobService.createJob(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Job created successfully',
    data: result,
  });
});

const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const filters = {
    category: req.query.category as string,
    location: req.query.location as string,
    search: req.query.search as string,
  };
  const result = await JobService.getAllJobs(filters);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Jobs retrieved successfully',
    data: result,
  });
});

const getJobById = catchAsync(async (req: Request, res: Response) => {
  const result = await JobService.getJobById(req.params.id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Job retrieved successfully',
    data: result,
  });
});

const deleteJob = catchAsync(async (req: Request, res: Response) => {
  const result = await JobService.deleteJob(req.params.id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Job deleted successfully',
    data: result,
  });
});

export const JobController = {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
};
