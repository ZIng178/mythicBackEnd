const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://wangdi:bhodrangzen@mythic.5eh2e.mongodb.net/mythic?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backend server is running ");
});
