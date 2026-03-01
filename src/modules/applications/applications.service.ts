import { Application } from "./applications.model";
import { IApplication } from "./applications.interface";

const createApplication = async (
  payload: IApplication,
): Promise<IApplication> => {
  const result = await Application.create(payload);
  return result;
};

const getAllApplications = async () => {
  const result = await Application.find()
    .populate({
      path: "job_id",
      select: "title company",
    })
    .sort({ created_at: -1 });
  return result;
};

export const ApplicationService = {
  createApplication,
  getAllApplications,
};
