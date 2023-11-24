import dotenv from "dotenv";
import path from "path";

// to get current directory
// console.log(process.cwd())
dotenv.config({ path: path.join(process.cwd(), ".env") });
// console.log(path);
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
