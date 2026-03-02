import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { JobController } from "./jobs.controller";
import {
  jobValidationSchema,
  jobUpdateValidationSchema,
} from "./jobs.validation";

const router = express.Router();

router.post("/", validateRequest(jobValidationSchema), JobController.createJob);

router.get("/", JobController.getAllJobs);
router.get("/:id", JobController.getJobById);

router.put(
  "/:id",
  validateRequest(jobUpdateValidationSchema),
  JobController.updateJob,
);

router.delete("/:id", JobController.deleteJob);

export const JobRoutes = router;
