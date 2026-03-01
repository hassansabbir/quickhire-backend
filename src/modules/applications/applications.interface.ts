import { Model, Types } from 'mongoose';

export type IApplication = {
  job_id: Types.ObjectId | string;
  name: string;
  email: string;
  resume_link: string;
  cover_note: string;
  created_at?: Date;
};

export type ApplicationModel = Model<IApplication, Record<string, unknown>>;
