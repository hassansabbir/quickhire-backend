import express from "express";
import { JobRoutes } from "../modules/jobs/jobs.route";
import { ApplicationRoutes } from "../modules/applications/applications.route";
import { UploadRoutes } from "../modules/upload/upload.route";

const apiRouter = express.Router();

apiRouter.use("/jobs", JobRoutes);
apiRouter.use("/applications", ApplicationRoutes);
apiRouter.use("/upload", UploadRoutes);

export default apiRouter;
