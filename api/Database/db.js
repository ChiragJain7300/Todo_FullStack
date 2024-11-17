import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connString = await mongoose.connect(process.env.MONGO_URL);
    console.log(connString.connection.host);
  } catch (error) {
    console.log(error);
  }
};
