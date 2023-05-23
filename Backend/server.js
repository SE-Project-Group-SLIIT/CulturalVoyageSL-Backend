const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
//connect database
connection.once("open", () => {
  console.log("Mongodb Connection Success !" , PORT);
});


const loginRouter = require("./routes/loginRoutes")
const userRouter = require("./routes/userRoutes")
const eventRoutes = require("./routes/eventRoutes");
const postRoutes = require("./routes/postRoutes");
const replyRoutes = require("./routes/replyRoutes")

app.use("/event",eventRoutes);
app.use("/post",postRoutes);
app.use("/reply",replyRoutes);
app.use("/login",loginRouter)
app.use("/user",userRouter)



app.listen(PORT, () => {
    console.log(`server is up and running on port:${PORT}`);
})

module.exports = { app };