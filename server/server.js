const express = require("express");
const router = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen("5000", () => {
  console.log("listening on 5000");
});
