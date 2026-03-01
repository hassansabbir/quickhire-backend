import { Application } from './applications.model';
import { IApplication } from './applications.interface';

const createApplication = async (payload: IApplication): Promise<IApplication> => {
  const result = await Application.create(payload);
  return result;
};

export const ApplicationService = {
  createApplication,
};
