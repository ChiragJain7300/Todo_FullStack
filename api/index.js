import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectDb } from "./Database/db.js";
import { todoRouter } from "./Routes/todo.route.js";
configDotenv();

const port = process.env.PORT || 3025;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRouter);

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("The server is running on ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
