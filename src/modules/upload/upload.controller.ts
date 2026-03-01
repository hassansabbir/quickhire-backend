import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { uploadToCloudinary } from "../../utils/uploadImage";

const uploadFile = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "Please provide a file to upload",
      data: null,
    });
  }

  // Upload to cloudinary in "quickhire-resumes" folder or "quickhire-logos"
  const folder = req.body.folder || "quickhire-uploads";
  const result = await uploadToCloudinary(req.file.buffer, folder);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "File uploaded successfully",
    data: {
      url: result.secure_url,
      public_id: result.public_id,
    },
  });
});

export const UploadController = {
  uploadFile,
};
