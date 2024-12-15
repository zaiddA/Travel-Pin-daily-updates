const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pinRoute");
const userRoute = require("./routes/userRoute");
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
