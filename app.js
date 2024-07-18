require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// body restful api
app.use("/api/v1", require("./routes"));

app.listen(port, () => {
  // debug initial message
  console.log(`Server development by AngeloGota`);
  console.log(`Server is running on port: ${port}`);
  console.log(`http://localhost:${port}`);
});

dbConnect();
