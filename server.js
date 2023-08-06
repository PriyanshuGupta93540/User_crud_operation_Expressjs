import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use("/api/user", userRoute);

dotenv.config();

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(express.json());

// create

app.listen(process.env.PORT || 8000);
