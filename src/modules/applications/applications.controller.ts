import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ApplicationService } from "./applications.service";

const createApplication = catchAsync(async (req: Request, res: Response) => {
  const result = await ApplicationService.createApplication(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Application submitted successfully",
    data: result,
  });
});

const getAllApplications = catchAsync(async (req: Request, res: Response) => {
  const result = await ApplicationService.getAllApplications();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Applications retrieved successfully",
    data: result,
  });
});

export const ApplicationController = {
  createApplication,
  getAllApplications,
};
