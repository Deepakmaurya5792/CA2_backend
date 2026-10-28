import mongoose from "mongoose";

const libSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  availability: {
    type: Boolean,
    required: false,
  },
  creationdate: {
    type: Date,
  },
});

const user = mongoose.model("user", libSchema);

export default user;
