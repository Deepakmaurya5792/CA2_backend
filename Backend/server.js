import express from "express";
import books from "./Controller/controller.js";
import connectdb from "./Db/db.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", books);

const startServer = async () => {
  try {
    await connectdb();
    app.listen(port, () => {
      console.log(`App is running on ${port}`);
    });
  } catch (error) {
    console.error(error.message);
    app.listen(port, () => {
      console.log("App is running");
    });
  }
};

startServer();
