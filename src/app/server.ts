import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(config.database_url as string);
    console.log("MongoDB URI:", config.database_url as string);
    console.log("Connected to MongoDB successfully");

    app.listen(config.port, () => {
      console.log(`Example app listening on PORT ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
