import multer from "multer";
import { cloudinaryUpload } from "../config/cloudinary.config";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

// Use memory storage to process file as a buffer in Node memory
// which can then be directly streamed to Cloudinary
const storage = multer.memoryStorage();

export const upload = multer({ storage });

export const uploadToCloudinary = (
  fileBuffer: Buffer,
  folderName: string,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinaryUpload.uploader.upload_stream(
      { folder: folderName },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined,
      ) => {
        if (error) return reject(error);
        resolve(result);
      },
    );

    // Write the buffer to the cloudinary stream
    uploadStream.end(fileBuffer);
  });
};
