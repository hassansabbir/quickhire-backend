import { Job } from './jobs.model';
import { IJob } from './jobs.interface';

const createJob = async (payload: IJob): Promise<IJob> => {
  const result = await Job.create(payload);
  return result;
};

const getAllJobs = async (filters: { category?: string; location?: string; search?: string }): Promise<IJob[]> => {
  const query: any = {};
  
  if (filters.category) {
    query.category = { $regex: filters.category, $options: 'i' };
  }
  if (filters.location) {
    query.location = { $regex: filters.location, $options: 'i' };
  }
  if (filters.search) {
    query.$or = [
      { title: { $regex: filters.search, $options: 'i' } },
      { company: { $regex: filters.search, $options: 'i' } }
    ];
  }

  const result = await Job.find(query).sort({ created_at: -1 });
  return result;
};

const getJobById = async (id: string): Promise<IJob | null> => {
  const result = await Job.findById(id);
  return result;
};

const deleteJob = async (id: string): Promise<IJob | null> => {
  const result = await Job.findByIdAndDelete(id);
  return result;
};

export const JobService = {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
};
