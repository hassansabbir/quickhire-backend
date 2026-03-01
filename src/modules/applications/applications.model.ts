import { Schema, model } from 'mongoose';
import { ApplicationModel, IApplication } from './applications.interface';

const applicationSchema = new Schema<IApplication, ApplicationModel>(
  {
    job_id: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    resume_link: {
      type: String,
      required: true,
    },
    cover_note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: false },
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        (ret as any).id = ret._id;
        delete (ret as any)._id;
        delete (ret as any).__v;
      },
    },
  }
);

export const Application = model<IApplication, ApplicationModel>(
  'Application',
  applicationSchema
);
