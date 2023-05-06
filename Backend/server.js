const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
//connect database
connection.once("open", () => {
  console.log("Mongodb Connection Success !" , PORT);
});

const eventRoutes = require("./routes/eventRoutes");
const siteRoutes = require("./routes/siteRoutes");

app.use("/event",eventRoutes);
app.use("/site", siteRoutes);

app.listen(PORT, () => {
    console.log(`server is up and running on port:${PORT}`);
})