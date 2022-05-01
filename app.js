require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,

  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Mongo Conncted");
    }
  }
);

app.use("/user", express.json(), userRouter);

app.use("/admin", express.json(), adminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
