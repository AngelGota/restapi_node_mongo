const mongosse = require("mongoose");

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongosse.connect(DB_URI);
    console.log(">>> DB Connected");
  } catch (error) {
    console.log(">>> Error connecting to DB", error);
  }
};

module.exports = dbConnect;
