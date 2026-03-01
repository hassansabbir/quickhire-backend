import express from "express";
import { UploadController } from "./upload.controller";
import { upload } from "../../utils/uploadImage";

const router = express.Router();

// Using multer to parse incoming form-data for 'file'
router.post("/", upload.single("file"), UploadController.uploadFile);

export const UploadRoutes = router;
