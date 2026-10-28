import mongoose from "mongoose";

const connectdb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log("MongoDB connected");
};

export default connectdb;
