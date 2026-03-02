import mongoose from "mongoose";
import app from "../src/app";
import config from "../src/config";

let isConnected = false;

const connectDB = async () => {
  if (!isConnected) {
    await mongoose.connect(config.database_url as string);
    isConnected = true;
  }
};

export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}
