const mongoose = require("mongoose");
const app = require("./app");

// DB Connection
const DB = process.env.MONGO_URL.replace(
  "<db_password>",
  process.env.MONGO_PASSWORD
);
mongoose.connect(DB).then(() => console.log("CONNECTED TO DB SUCCESSFULLY..."));

const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
  console.log(`CONNECTED TO PORT ${port}...`);
});
