require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kabir_pal53:kabir123@cluster0.ycpqubz.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(4000, () => {
  console.log("Server started");
});
