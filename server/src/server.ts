import express from "express";
import cors from "cors";
import { App } from "@rage-js/core";
import dotenv from "dotenv";
import mongoose from "mongoose";

import hiveRoute from "./routes/hive.route";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/hive", hiveRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// mongoose.connect(process.env.MONGOURI!).then(() => {
//   console.log("Connected to MongoDB");
//   app.listen(process.env.PORT!, () => {
//     console.log("Listening on port " + process.env.PORT);
//   });
// });

const rageApp = new App("./rage.config.json", true);

async function start() {
  await rageApp.setup();
  await rageApp.start();
}

start();

process.on("SIGINT", async () => {
  await rageApp.stop();
  process.exit(0);
});
