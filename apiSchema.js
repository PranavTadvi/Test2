const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
  // id: String,
  // name: String,
  // email: String,
  // body: String,
  account: String,
  balance: String,
});

module.exports = mongoose.model("api_data", apiSchema);
