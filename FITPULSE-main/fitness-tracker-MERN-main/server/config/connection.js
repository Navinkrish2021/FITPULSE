const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://navin:1234abcd@cluster0.ihkf0.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
