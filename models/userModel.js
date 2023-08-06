import mongoose from "mongoose";

// Create Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Create Model
const User = mongoose.model("User", userSchema);

export default User;
