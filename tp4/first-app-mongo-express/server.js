const express = require('express');
const userRoute = require('./routes/user.route');
require('dotenv').config();
const { default: mongoose } = require('mongoose');
const app = express();



app.use(express.json());
app.use("/users", userRoute);
mongoose.connect(
  process.env.MONGO_URI
  ).then(() => {console.log("Connected to MongoDB")}).catch((err) => {console.log(err)});
const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

