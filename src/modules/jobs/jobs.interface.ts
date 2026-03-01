import { Model } from 'mongoose';

export type IJob = {
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  created_at?: Date;
};

export type JobModel = Model<IJob, Record<string, unknown>>;
