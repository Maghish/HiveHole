import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import exampleRoute from "./routes/example.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", exampleRoute)

mongoose.connect(process.env.MONGOURI!).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT!, () => {
    console.log("Listening on port " + process.env.PORT);
  });
});
