import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ApplicationController } from "./applications.controller";
import { applicationValidationSchema } from "./applications.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(applicationValidationSchema),
  ApplicationController.createApplication,
);

router.get("/", ApplicationController.getAllApplications);

export const ApplicationRoutes = router;
