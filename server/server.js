const express = require("express");
const router = require("./routes/index");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT || "5000", () => {
  console.log("listening on 5000");
});

module.exports = express;
